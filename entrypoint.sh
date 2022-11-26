#!/bin/sh

python manage.py migrate --no-input
python manage.py collectstatic --no-input

gunicorn portfolio.wsgi:application --workers 5 --bind 0.0.0.0:8000
