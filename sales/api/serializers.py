from rest_framework import serializers

from sales.models import Sale


class SaleSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = Sale
        fields = [
            'id',
            'product',
            'revenue',
            'sales_number',
            'date',
            'user',
        ]

        read_only_fields = [
            'id',
            'user',
            'product',
        ]
