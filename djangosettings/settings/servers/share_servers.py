import dj_database_url
import django_heroku

from ..base import *

DEBUG = False

REST_FRAMEWORK['DEFAULT_THROTTLE_RATES'] = {
    'anon': '500/day',
    'user': '500/day',
    'burst': '20/min',
    'sustained': '500/day',
}

# TODO: configure s3 storage
MEDIA_ROOT = os.path.join(BASE_DIR.parent, "media")
MEDIA_URL = "/media/"
STATIC_ROOT = os.path.join(BASE_DIR.parent, 'staticfiles')
STATIC_URL = '/static/'
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'
django_heroku.settings(locals())
