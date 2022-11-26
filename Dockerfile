FROM node:19-alpine as frontend

ENV NODE_ENV="production"

WORKDIR /app

COPY ./templates templates
COPY ./frontend frontend

RUN npm i -g npm@latest
RUN cd frontend && npm install --omit=dev && npm run build

FROM python:3.11.0-slim

RUN useradd wagtail

EXPOSE 8000

ENV PYTHONUNBUFFERED=1 \
    PORT=8000

RUN set -ex && apt-get update --yes --quiet && apt-get install --yes --quiet --no-install-recommends \
    build-essential \
    libpq-dev \
    libmariadb-dev \
    libjpeg62-turbo-dev \
    zlib1g-dev \
    libwebp-dev \
    && rm -rf /var/lib/apt/lists/*

RUN pip install --upgrade pip

COPY requirements.txt .
RUN pip install --no-cache-dir --upgrade -r requirements.txt

WORKDIR /app

RUN chown wagtail:wagtail /app

COPY --chown=wagtail:wagtail . .
COPY --from=frontend app/frontend/build frontend/build

USER wagtail

RUN chmod +x ./entrypoint.sh

CMD ./entrypoint.sh
