release: python manage.py collectstatic --no-input; python manage.py migrate --no-input

web: gunicorn djangosettings.wsgi --log-file=- --log-level=debug
