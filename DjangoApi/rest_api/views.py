from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt
from core.models import Usuario, Seccion, Asignatura
from .serializers import UsuarioSerializer, SeccionSerializer

# Create your views here.
@csrf_exempt
@api_view(['POST'])
def login(request):
    data = request.data
    correo = data['mailUser']
    password = data['password']

    try:
        usuario = Usuario.objects.get(correo = correo)
    except Usuario.DoesNotExist:
        return Response(status = status.HTTP_404_NOT_FOUND)
    if (usuario.password == password):
        respuesta = {
            "id": usuario.id,
            "docente": usuario.docente
        }
        return Response(respuesta, status = status.HTTP_200_OK)
    else:
        return Response(status = status.HTTP_404_NOT_FOUND)

@api_view(['GET'])
def claseDocente(request, id):
    try:
        usuario = Usuario.objects.get(id = id)
    except Usuario.DoesNotExist:
        return Response(status = status.HTTP_404_NOT_FOUND)
    try:
        secciones = Seccion.objects.filter(profesor = usuario)
    except Seccion.DoesNotExist:
        return Response(status = status.HTTP_404_NOT_FOUND)

    serializer = SeccionSerializer(secciones, many=True)
    return Response(serializer.data, status = status.HTTP_200_OK)


