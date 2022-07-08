from drf_yasg import openapi
from drf_yasg.utils import swagger_auto_schema
from rest_framework import status
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from sales.api.serializers import SaleSerializer, SaleStatisticsSerializer
from sales.models import Sale
from sales.utils import import_sales_from_csv


class SaleModelViewSet(ModelViewSet):
    """
    retrieve:
        Return a sale instance.

    list:
        Return all sales related to this user.

    create:
        Create a new sale for this user.

    delete:
        Remove an existing sale.

    partial_update:
        Update one or more fields on an existing sale record.

    update:
        Update a sale record.


    """

    queryset = Sale.objects.none()
    permission_classes = [
        IsAuthenticated,
    ]
    serializer_class = SaleSerializer

    def get_queryset(self):
        return Sale.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    @swagger_auto_schema(
        operation_description="Import sales from a CSV file.",
        responses={200: SaleSerializer(many=True)},
        request_body=openapi.Schema(
            type=openapi.TYPE_OBJECT,
            properties={
                'csv': openapi.Schema(
                    type=openapi.TYPE_FILE,
                    description="`csv` is a file of csv data",
                )
            },
        ),
    )
    @action(methods=['post'], detail=False, url_path='import-csv')
    def import_csv(self, request):
        file_obj = request.FILES.get('csv', None)
        if not file_obj:
            return Response({'error': 'No file'}, status=status.HTTP_400_BAD_REQUEST)
        if file_obj.content_type != 'text/csv':
            return Response({'error': 'Invalid file type'}, status=status.HTTP_400_BAD_REQUEST)
        import_sales_from_csv(Sale, self.request.user.id, reader=file_obj)
        return self.list(request)

    @action(methods=['get'], serializer_class=SaleStatisticsSerializer, detail=False)
    def statistics(self, request):
        item = Sale.objects.all().statistics(user_id=request.user.id)

        highest_revenue_sale_for_current_user = None
        product_highest_revenue_for_current_user = None
        product_highest_sales_number_for_current_user = None
        sale_id_highest_revenue_sale_for_current_user = item.get('sale_id_highest_revenue_sale_for_current_user')
        sale_id_product_highest_revenue_for_current_user = item.get('sale_id_product_highest_revenue_for_current_user')
        sale_id_product_highest_sales_number_for_current_user = item.get(
            'sale_id_product_highest_sales_number_for_current_user'
        )
        if item:
            queryset = list(
                self.get_queryset().filter(
                    pk__in=[
                        sale_id_highest_revenue_sale_for_current_user,
                        sale_id_product_highest_revenue_for_current_user,
                        sale_id_product_highest_sales_number_for_current_user,
                    ]
                )
            )
            for sale in queryset:
                if sale.id == sale_id_highest_revenue_sale_for_current_user:
                    highest_revenue_sale_for_current_user = sale
                if sale.id == sale_id_product_highest_revenue_for_current_user:
                    product_highest_revenue_for_current_user = sale
                if sale.id == sale_id_product_highest_sales_number_for_current_user:
                    product_highest_sales_number_for_current_user = sale
        response = {
            'average_sales_for_current_user': item.get('average_sales_for_current_user'),
            'average_sale_all_user': item.get('average_sale_all_user'),
            'product_highest_revenue_for_current_user': product_highest_revenue_for_current_user,
            'highest_revenue_sale_for_current_user': highest_revenue_sale_for_current_user,
            'product_highest_sales_number_for_current_user': product_highest_sales_number_for_current_user,
        }
        return Response(self.get_serializer(response).data, status=status.HTTP_200_OK)
