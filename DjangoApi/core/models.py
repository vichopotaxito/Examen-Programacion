from django.db import models

# Create your models here.

class Usuario(models.Model):
    correo = models.CharField(max_length=50)
    password= models.CharField(max_length=30)
    docente = models.BooleanField(default=False)

    def __str__(self):
        return self.correo

class Asignatura(models.Model):
    nombreAsignatura = models.CharField(max_length=50)

    def __str__(self):
        return self.nombreAsignatura        
      

class Seccion(models.Model):
    nombreSeccion = models.CharField(max_length=30)
    asignatura = models.ForeignKey(Asignatura, on_delete=models.CASCADE)
    profesor = models.ForeignKey(Usuario, on_delete=models.CASCADE)


    def __str__(self):
        return self.nombreSeccion

