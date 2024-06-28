from django.db import models

# Create your models here.
# apps/users/models.py
from django.contrib.auth.models import AbstractUser
class CustomUser(AbstractUser):
    USER_TYPE_CHOICES = (
        ('emprendedor', 'Emprendedor'),
        ('mentor', 'Mentor'),
    )
    user_type = models.CharField(max_length=15, choices=USER_TYPE_CHOICES)
    paternal_last_name = models.CharField(max_length=30)
    maternal_last_name = models.CharField(max_length=30)
    phone = models.CharField(max_length=15)
    gender = models.CharField(max_length=10)
    date_of_birth = models.DateField()
    receive_updates = models.BooleanField(default=False)