from django.contrib import admin

# Register your models here.
from cities.models import City, Country

admin.site.register(Country)
admin.site.register(City)
