from django.db import models
from django.utils.translation import gettext_lazy as _

# Create your models here.
from sales.utils import normalize_product_name


class Sale(models.Model):
    product = models.CharField(_("Product"), null=False, blank=False, max_length=100)
    product_normalized = models.CharField(_("Product normalized"), null=True, blank=True, max_length=100)
    revenue = models.DecimalField(_("Revenue"), default=0, decimal_places=2, max_digits=10)
    sales_number = models.IntegerField(_("Sales Number"), default=0)
    date = models.DateField(_("Date"))
    user = models.ForeignKey('users.User', on_delete=models.CASCADE, verbose_name=_("User"))

    def __str__(self):
        return self.product

    class Meta:
        unique_together = ('product_normalized', 'user', 'date')

    def save(self, *args, **kwargs):
        self.product_normalized = normalize_product_name(self.product)
        super().save(*args, **kwargs)
