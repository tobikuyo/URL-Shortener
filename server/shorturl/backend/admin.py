from django.contrib import admin
from .models import Shorturl

class ShorturlAdmin(admin.ModelAdmin):
    list_display = ('url', 'code')

# Register your models here.

admin.site.register(Shorturl, ShorturlAdmin)