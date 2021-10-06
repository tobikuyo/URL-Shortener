from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ShorturlSerializer
from .models import Shorturl

# Create your views here.
class ShorturlView(viewsets.ModelViewSet):
    serializer_class = ShorturlSerializer
    queryset = Shorturl.objects.all()
