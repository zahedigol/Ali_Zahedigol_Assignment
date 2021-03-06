import dj_database_url

from ..base import *

ALLOWED_HOSTS = ['*']

DEBUG = False

REST_FRAMEWORK['DEFAULT_THROTTLE_RATES'] = {
    'anon': '500/day',
    'user': '500/day',
    'burst': '20/min',
    'sustained': '500/day',
}

# TODO: configure s3 storage
MEDIA_ROOT = os.path.join(BASE_DIR, "media")
MEDIA_URL = "/media/"
STATIC_ROOT = os.path.join(BASE_DIR, 'static')
STATIC_URL = '/static/'
STATICFILES_STORAGE = "whitenoise.storage.CompressedStaticFilesStorage"
DATABASES = {'default': dj_database_url.config()}
