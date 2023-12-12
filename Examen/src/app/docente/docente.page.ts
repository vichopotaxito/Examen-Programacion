import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { QRCodeModule } from 'angularx-qrcode';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.page.html',
  styleUrls: ['./docente.page.scss'],
})
export class DocentePage implements OnInit{

  scannedResult: any;
  qrAsignatura: string = '';
  content_visibility = 'hidden';
  correo: string =''
  idProfe: any;
  clases = 'hidden';


  asignatura:any;
  seccion: any;

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) {
   }

  ngOnInit(){
    this.route.queryParams.subscribe(() => {
      let state = this.router.getCurrentNavigation()?.extras.state;
      if (state) {
        this.idProfe = state['idProfesor'];
        // console.log(this.idProfe);
      }
    });

    this.api.obtAsig(this.idProfe).subscribe(
      (respuesta)=>{
        console.log(respuesta);
        const [{asignatura}] = respuesta
        const [{nombreSeccion}] = respuesta;
        this.asignatura = asignatura;
        this.seccion = nombreSeccion;
        console.log(asignatura);
        if(asignatura == 1){
          this.asignatura = 'Programacion'
          console.log(this.asignatura);
          } 
          else if(asignatura == 2){
            this.asignatura = 'Matematicas'
            console.log(this.asignatura);
          } else {
            this.asignatura = 'Ingles'
            console.log(this.asignatura);
          }
      },
      (e)=>{console.log(e);
      }
    );
  }


  mostrarClases(){
    this.qrAsignatura = this.asignatura + "-" + this.seccion
    this.clases = '';
  }


  // obtAsig(){
  //   if(this.asignatura = 1){
  //     this.asignatura = 'Programacion'

  //   }else if(this.asignatura = 2){
  //     this.asignatura = 'Matematicas'

  //   }else if(this.asignatura = 3)
  //     {this.asignatura ='Ingles'}
  //   console.log(this.asignatura)
  // }



  cerrarSesion(){
    this.router.navigate(['login'])
  }

  mostrarQr(){
    this.content_visibility = '';
  }

  obtData(){
    var correo = localStorage.getItem('user')
    console.log(correo)
  }
   
}
