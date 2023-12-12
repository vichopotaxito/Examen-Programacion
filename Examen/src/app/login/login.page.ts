import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ApiService } from 'src/services/api.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, private api: ApiService, private navCtrl: NavController) { }

  correo: string = '';
  password: string = '';
  idProfesor: any;
  opcionSeleccionada: boolean = false;



  ngOnInit() {
    localStorage.getItem('correo')
    localStorage.getItem('password')
  }

  login(){
    let user = this.correo;
    let pass = this.password;
    this.api.login(user, pass).subscribe(
      (respuesta)=>{
        console.log(respuesta);
        const {docente} = respuesta;
        console.log(docente);
        let esIdentificado = false
        if(docente){
          const {id} = respuesta
          this.idProfesor = id
          let idProfesor : NavigationExtras = {
            state: { idProfesor: this.idProfesor}
          }
          // console.log(this.idProfesor)
          
          if(this.opcionSeleccionada){
            localStorage.setItem('correo', user)
            localStorage.setItem('password', pass)
          } else {
          }

          esIdentificado = true
          this.router.navigate(['docente'], idProfesor)
        }
        else{
          esIdentificado = true
          this.router.navigate(['alumno'])
        }
        // if (esIdentificado) {
        //   localStorage.setItem('user', user)
        //   localStorage.setItem('pass', pass)
        // }
        // (async () => {
        //   console.log(await this.getStore('user'))
        // })()
      }
      ,
      (error)=>{
        console.log(error);
      }
    );
  }




}
