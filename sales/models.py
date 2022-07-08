from django.db import models
from django.db.models import Avg, Case, Count, F, When, Window
from django.db.models.functions import FirstValue
from django.utils.translation import gettext_lazy as _

# Create your models here.
from sales.utils import normalize_product_name


class SaleQueryset(models.QuerySet):
    def statistics(self, user_id: int):
        window_expression_per_user = {'partition_by': [F('user')]}
        queryset = self.annotate(sales=F('revenue') / F('sales_number')).annotate(
            average_sales_for_current_user=Window(expression=Avg('sales'), **window_expression_per_user),
            average_sale_all_user=Window(
                expression=Avg('sales'),
            ),
            sale_id_highest_revenue_sale_for_current_user=Window(
                expression=FirstValue('id'),
                order_by=F('revenue').desc(),
                **window_expression_per_user,
            ),
            sale_id_product_highest_sales_number_for_current_user=Window(
                expression=FirstValue('id'),
                order_by=F('sales_number').desc(),
                **window_expression_per_user,
            ),
        )
        queryset = queryset.annotate(user_relevancy=Count(Case(When(user_id=user_id, then=1))))
        return (
            queryset.values(
                'average_sales_for_current_user',
                'average_sale_all_user',
                'sale_id_highest_revenue_sale_for_current_user',
                'sale_id_product_highest_sales_number_for_current_user',
            )
            .order_by('-user_relevancy')
            .first()
        )


class SaleManager(models.Manager):
    def get_queryset(self):
        return SaleQueryset(self.model, using=self._db)


class Sale(models.Model):
    product = models.CharField(_("Product"), null=False, blank=False, max_length=100)
    product_normalized = models.CharField(_("Product normalized"), null=True, blank=True, max_length=100)
    revenue = models.DecimalField(_("Revenue"), default=0, decimal_places=2, max_digits=10)
    sales_number = models.IntegerField(_("Sales Number"), default=0)
    date = models.DateField(_("Date"))
    user = models.ForeignKey('users.User', on_delete=models.CASCADE, verbose_name=_("User"))

    objects = SaleManager()

    def __str__(self):
        return self.product

    class Meta:
        unique_together = ('product_normalized', 'user', 'date')

    def save(self, *args, **kwargs):
        self.product_normalized = normalize_product_name(self.product)
        super().save(*args, **kwargs)
