#!/bin/sh

python manage.py migrate --no-input
python manage.py collectstatic --no-input
python manage.py createcachetable

gunicorn artifica.wsgi:application -w 4 --bind 0.0.0.0:$PORT
