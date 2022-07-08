from rest_framework import routers

from sales.api.views import SaleModelViewSet
from users.api.views import UserViewSet

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'sales', SaleModelViewSet)

api_url = router.urls
