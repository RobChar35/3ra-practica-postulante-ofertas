from rest_framework import routers
from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter

router = routers.DefaultRouter()
router.register('postulantes', views.PostulanteOfertaViewSet, 'postulantes')

urlpatterns = router.urls