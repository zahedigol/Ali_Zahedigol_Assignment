from rest_framework import serializers

from cities.models import City, Country


class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = (
            'id',
            'name',
        )
        read_only_fields = (
            'id',
            'name',
        )


class CountrySerializer(serializers.ModelSerializer):
    cities = CitySerializer(many=True, read_only=True, source='city_set')

    class Meta:
        model = Country
        fields = (
            'id',
            'name',
            'iso2',
            'iso3',
            'cities',
        )
        read_only_fields = (
            'id',
            'name',
            'cities',
            'iso2',
            'iso3',
        )
