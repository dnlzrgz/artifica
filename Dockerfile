FROM node:19-alpine as frontend

ENV NODE_ENV="production"

WORKDIR /app

COPY artifica/templates artifica/templates
COPY artifica/frontend artifica/frontend

RUN npm i -g npm@latest
RUN cd artifica/frontend && npm install --omit=dev && npm run build

FROM python:3.11-slim as builder

WORKDIR /app

ENV PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1

RUN set -ex && apt-get update --yes --quiet && apt-get install --yes --quiet --no-install-recommends \
    build-essential \
    libpq-dev \
    libmariadb-dev \
    libjpeg62-turbo-dev \
    zlib1g-dev \
    libwebp-dev

RUN python -m venv /opt/venv
ENV PATH="/opt/venv/bin:$PATH"

COPY requirements.prod.txt .
RUN python -m pip install --upgrade pip && python -m pip install --upgrade -r requirements.prod.txt

FROM python:3.11-slim

RUN useradd wagtail

ENV PORT=8000

EXPOSE $PORT

RUN set -ex && apt-get update --yes --quiet && apt-get install --yes --quiet --no-install-recommends \
    libpq-dev \
    libmariadb-dev \
    libjpeg62-turbo-dev \
    zlib1g-dev \
    libwebp-dev \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

RUN chown wagtail:wagtail /app

COPY --chown=wagtail:wagtail artifica/ artifica/
COPY --chown=wagtail:wagtail manage.py .
COPY --chown=wagtail:wagtail entrypoint.sh .

COPY --from=builder /opt/venv /opt/venv
COPY --from=frontend app/artifica/frontend/build artifica/frontend/build

RUN mkdir -p staticfiles media logs && chown -R 1000:2000 staticfiles media logs

ENV PATH="/opt/venv/bin:$PATH"

USER wagtail

RUN chmod +x ./entrypoint.sh

CMD ./entrypoint.sh
