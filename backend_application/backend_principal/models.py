from django.db import models

# Create your models here.
class Postulante_Oferta(models.Model):
    PERFIL_POSTULANTES = [
        ('Frontend', 'Frontend'),
        ('Backend', 'Backend')
    ]

    NIVEL_POSTULANTES = [
        ('Junior', 'Junior'),
        ('Semisenior', 'Semisenior'),
        ('Senior', 'Senior')
    ]
    
    nombre_completo = models.CharField(max_length=250)
    dni = models.CharField(max_length=8)
    perfil = models.CharField(max_length=100, choices=PERFIL_POSTULANTES)
    nivel = models.CharField(max_length=100, choices=NIVEL_POSTULANTES)
    fecha_nacimiento = models.DateField()
    fecha_publicacion = models.DateField(auto_now_add=True)

    def __str__(self):
        return "Postulante: {}".format(self.nombre_completo)