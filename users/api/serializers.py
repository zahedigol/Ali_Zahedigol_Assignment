from rest_framework import serializers

from cities.models import City
from users.models import User


class UserSerializer(serializers.ModelSerializer):
    username = serializers.SerializerMethodField()
    country = serializers.SerializerMethodField()
    city = serializers.PrimaryKeyRelatedField(
        required=False,
        allow_null=True,
        queryset=City.objects.all(),
        write_only=False,
    )

    class Meta:
        model = User
        fields = [
            'id',
            'username',
            'first_name',
            'last_name',
            'email',
            'gender',
            'age',
            'country',
            'city',
        ]

        read_only_fields = [
            'id',
            'username',
            'country',
        ]

    def get_username(self, obj):
        return obj.email

    def get_country(self, obj):
        return obj.city.country_id if obj.city else None
