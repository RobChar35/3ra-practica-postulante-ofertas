from rest_framework import serializers
from backend_principal.models import *

class PostulanteOfertaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Postulante_Oferta
        fields = "__all__"
        read_only_fields = ["fecha_publicacion"]