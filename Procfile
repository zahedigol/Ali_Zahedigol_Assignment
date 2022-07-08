release: python manage.py migrate --no-input

web: gunicorn djangosettings.wsgi --log-file=- --log-level=debug
