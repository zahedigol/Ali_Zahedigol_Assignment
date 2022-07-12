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
            'product_normalized',
        ]

        read_only_fields = [
            'id',
            'user',
            'product',
            'product_normalized',
        ]


class SaleStatisticsSerializer(serializers.Serializer):
    average_sales_for_current_user = serializers.DecimalField(decimal_places=2, max_digits=10)
    average_sale_all_user = serializers.DecimalField(decimal_places=2, max_digits=10)
    highest_revenue_sale_for_current_user = SaleSerializer()
    product_highest_revenue_for_current_user = SaleSerializer()
    product_highest_sales_number_for_current_user = SaleSerializer()

    class Meta:
        fields = [
            'average_sales_for_current_user',
            'average_sale_all_user',
            'highest_revenue_sale_for_current_user',
            'product_highest_revenue_for_current_user',
            'product_highest_sales_number_for_current_user',
        ]
        read_only_fields = [
            'average_sales_for_current_user',
            'average_sale_all_user',
            'highest_revenue_sale_for_current_user',
            'product_highest_revenue_for_current_user',
            'product_highest_sales_number_for_current_user',
        ]
