from django.db import models

# Create your models here.
# apps/users/models.py
from django.contrib.auth.hashers import make_password
class CustomUser(models.Model):
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

    def save(self, *args, **kwargs):
        if self.pk is None:  # Solo encriptar si el usuario es nuevo
            self.password = make_password(self.password)
        super().save(*args, **kwargs)