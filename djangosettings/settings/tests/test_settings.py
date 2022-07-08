from djangosettings.settings.base import *

DEBUG = False
# Application definition

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.9/howto/static-files/

# Update database configuration with $DATABASE_URL.
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        # load on memory for fast testing
        'NAME': ":memory:",
    }
}

# Load module from local memory
EMAIL_BACKEND = 'django.core.mail.backends.locmem.EmailBackend'

CACHES = {
    'default': {
        'BACKEND': 'django.core.cache.backends.dummy.DummyCache',
    }
}


del REST_FRAMEWORK['DEFAULT_THROTTLE_RATES']
del REST_FRAMEWORK['DEFAULT_THROTTLE_CLASSES']

MEDIA_URL = "/media/"
MEDIA_ROOT = os.path.join(BASE_DIR.parent, "media")

STATIC_ROOT = os.path.join(BASE_DIR.parent, 'staticfiles')
STATIC_URL = '/staticfiles/'
