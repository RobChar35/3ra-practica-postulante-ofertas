# Generated by Django 4.1.3 on 2022-11-15 13:41

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Postulante_Oferta',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre_completo', models.CharField(max_length=250)),
                ('dni', models.CharField(max_length=8)),
                ('perfil', models.CharField(choices=[('Frontend', 'Frontend'), ('Backend', 'Backend')], max_length=100)),
                ('nivel', models.CharField(choices=[('Junior', 'Junior'), ('Semisenior', 'Semisenior'), ('Senior', 'Senior')], max_length=100)),
                ('fecha_nacimiento', models.DateField()),
                ('fecha_publicacion', models.DateField(auto_now_add=True)),
            ],
        ),
    ]
