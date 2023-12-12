from rest_framework import serializers
from core.models import Usuario, Asignatura, Seccion

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ['correo', 'password', 'docente']
        

class SeccionSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Seccion
        fields = ['nombreSeccion', 'asignatura', 'profesor']

class AsignaturaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Asignatura
        fields = ['nombreAsignatura']