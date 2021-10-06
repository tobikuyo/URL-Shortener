from rest_framework import serializers
from .models import Shorturl

class ShorturlSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shorturl
        fields = ('id', 'url', 'code')