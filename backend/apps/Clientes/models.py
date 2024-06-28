from django.db import models

# Create your models here.
# apps/users/models.py
from django.contrib.auth.hashers import make_password

#Define el modelo CustomUser para la aplicación de usuarios
class CustomUser(models.Model):
      # Definición de las opciones para el campo user_type
    USER_TYPE_CHOICES = (
        ('emprendedor', 'Emprendedor'),
        ('mentor', 'Mentor'),
    )
    user_type = models.CharField(max_length=15, choices=USER_TYPE_CHOICES)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)
    user_name = models.CharField(max_length=30)
    paternal_last_name = models.CharField(max_length=30)
    maternal_last_name = models.CharField(max_length=30)
    phone = models.CharField(max_length=15)
    gender = models.CharField(max_length=10)
    date_of_birth = models.DateField()
    receive_updates = models.BooleanField(default=False)


    # Metadatos del modelo
    class Meta:
        verbose_name = 'Usuario'  # Nombre singular en la interfaz de administración
        verbose_name_plural = 'Usuarios' # Nombre plural en la interfaz de administración

    # Sobrescribir el método save para encriptar la contraseña si el usuario es nuevo
    def save(self, *args, **kwargs):
        if self.pk is None:  # Solo encriptar si el usuario es nuevo
            self.password = make_password(self.password)
        super().save(*args, **kwargs)

     # Representación en cadena del modelo
    def __str__(self):
        return self.user_name # Retorna el nombre de usuario como representación del objeto