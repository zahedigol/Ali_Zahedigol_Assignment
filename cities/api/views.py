from rest_framework import mixins, viewsets
from rest_framework.permissions import IsAuthenticated

from cities.api.serializers import CountrySerializer
from cities.models import Country


class CountryViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):
    serializer_class = CountrySerializer
    permission_classes = [IsAuthenticated]
    queryset = Country.objects.none()

    def get_queryset(self):
        return Country.objects.all().prefetch_related('city_set')
