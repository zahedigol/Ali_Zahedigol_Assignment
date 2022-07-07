from rest_framework import routers

from users.api.views import UserViewSet

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)

api_url = router.urls
