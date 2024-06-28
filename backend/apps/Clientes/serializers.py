# apps/users/serializers.py
from rest_framework import serializers
from .models import CustomUser
from django.contrib.auth.hashers import make_password

# Serializer para el modelo CustomUser
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser # Especificar el modelo que será serializado
        fields = (
            'id', 'user_type','user_name', 'email', 'password', 'paternal_last_name',
            'maternal_last_name', 'phone', 'gender', 'date_of_birth',
            'receive_updates'
        ) # Campos que serán incluidos en la serialización
        extra_kwargs = {'password': {'write_only': True}} # Configuración adicional para el campo passwords

# El método create para manejar la creación de usuarios
    def create(self, validated_data):
         # Crea una instancia de CustomUser con los datos validados
        user = CustomUser(
            email=validated_data['email'],
            user_name=validated_data['user_name'],
            user_type=validated_data['user_type'],
            paternal_last_name=validated_data['paternal_last_name'],
            maternal_last_name=validated_data['maternal_last_name'],
            phone=validated_data['phone'],
            gender=validated_data['gender'],
            date_of_birth=validated_data['date_of_birth'],
            receive_updates=validated_data['receive_updates'],
        )
         # Encripta la contraseña antes de guardarla en la base de datos
        user.password = make_password(validated_data['password']) 
        user.save()  # Guarda el usuario en la base de datos
        return user # Retorna la instancia del usuario creado
