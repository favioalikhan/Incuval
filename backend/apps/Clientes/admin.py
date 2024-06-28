from django.contrib import admin

# Register your models here.
from .models import CustomUser

from django import forms


class CustomUserForm(forms.ModelForm):
    class Meta:
        model = CustomUser #Modelo asociado al formulario
        fields = '__all__' ## Incluir todos los campos del modelo
        labels = {
            'user_type': 'Tipo de usuario',
            'email': 'Correo electrónico',
            'password': 'Contraseña',
            'user_name': 'Nombre de usuario',
            'paternal_last_name': 'Apellido paterno',
            'maternal_last_name': 'Apellido materno',
            'phone': 'Teléfono',
            'gender': 'Género',
            'date_of_birth': 'Fecha de nacimiento',
            'receive_updates': 'Recibir actualizaciones',
        }

# Configuración personalizada del admin para el modelo CustomUser
class CustomUserAdmin(admin.ModelAdmin):
    form = CustomUserForm # Usar el formulario personalizado

# Registrar el modelo CustomUser con la configuración personalizada en el admin
admin.site.register(CustomUser, CustomUserAdmin)
