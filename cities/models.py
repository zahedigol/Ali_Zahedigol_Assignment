from django.db import models
from django.utils.translation import gettext_lazy as _

# Create your models here.
class Country(models.Model):
    name = models.CharField(_("Name"), unique=True, max_length=255)
    iso2 = models.CharField(_("ISO2"), max_length=2)
    iso3 = models.CharField(_("ISO3"), max_length=3)

    def __str__(self):
        return self.name


class City(models.Model):
    name = models.CharField(_("Name"), max_length=255)
    country = models.ForeignKey("Country", on_delete=models.CASCADE, verbose_name=_("Country"))

    def __str__(self):
        return self.name

    class Meta:
        unique_together = ("name", "country")

