from rest_framework import routers

from cities.api.views import CountryViewSet
from sales.api.views import SaleModelViewSet
from users.api.views import UserViewSet

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'sales', SaleModelViewSet)
router.register(r'countries', CountryViewSet)

api_url = router.urls
