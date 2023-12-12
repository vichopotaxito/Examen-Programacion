from django.urls import path
from rest_api.views import login, claseDocente

urlpatterns=[
    path('login', login, name="Inicio de sesion"),
    path('secciones/<id>', claseDocente, name = "Clase Docente" )
]