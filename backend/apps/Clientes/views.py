from django.shortcuts import render

# Create your views here.
# apps/users/views.py
from rest_framework import generics
from .models import CustomUser
from .serializers import UserSerializer
from rest_framework.response import Response

# Vista para registrar y listar usuarios
class RegisterView(generics.ListCreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer

# Vista para obtener, actualizar y eliminar un usuario específico
class DetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer
    
# Vista para listar todos los usuarios    
class ListView(generics.ListAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer

# Vista para actualizar parcialmente un usuario específico
class UpdateView(generics.RetrieveUpdateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer
    partial = True
    
# Vista para eliminar un usuario específico
class DeleteView(generics.DestroyAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer

# Método para eliminar un usuario y retornar una respuesta personalizada
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object() # Obtiene la instancia del usuario a eliminar
        instance.delete()  # Elimina la instancia
        return Response(print("Usuario eliminado")) # Retorna una respuesta personalizada