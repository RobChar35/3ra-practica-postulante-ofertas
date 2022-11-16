from django.shortcuts import render

from rest_framework import viewsets, permissions
from backend_principal.models import *
from .serializers import *
from rest_framework.response import Response

# Create your views here.
class PostulanteOfertaViewSet(viewsets.ModelViewSet):
    serializer_class = PostulanteOfertaSerializer
    queryset = Postulante_Oferta.objects.all()
    permission_classes = [permissions.AllowAny]