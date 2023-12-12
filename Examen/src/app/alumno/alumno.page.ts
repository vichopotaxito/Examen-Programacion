import { Component, OnDestroy, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnDestroy {

  
  qrCodeString = 'Este es un mensaje qr secreto'
  scannedResult: any;
  content_visibility = '';

  

  constructor(private router: Router, private alertController: AlertController) { }

  async checkPermission(){
    try{
      const status = await BarcodeScanner.checkPermission({force: true});
      if (status.granted){
        return true;
      }
      return false;
    }catch(e) {
      console.log(e);
    }

  }

  async startScan(){
    try{
      const permission = await this.checkPermission();
      if(!permission){
        return;
      }
      await BarcodeScanner.hideBackground();
      document.querySelector('body')?.classList.add('scanner-active');
      this.content_visibility = 'hidden';
      const result = await BarcodeScanner.startScan();
      console.log(result);
      BarcodeScanner.showBackground();
      document.querySelector('body')?.classList.remove('scanner-active');
      this.content_visibility = '';
      if(result?.hasContent){
        this.scannedResult = result.content;
        this.presentAlert()
        console.log(this.scannedResult);

      }
    } catch (e){
      console.log(e);
      this.stopScan();
    }   
  }

  
  stopScan(){
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
    document.querySelector('body')?.classList.remove('scanner-active');
    this.content_visibility = '';
  }

  ngOnDestroy(): void {
    this.stopScan();
  }

  cerrarSesion(){
    this.router.navigate(['login'])
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Registro Exitoso',
      message: 'Se le ha enviado un correo electrónico con la confirmación de su asistencia.',
      buttons: ['OK'],
    });

    await alert.present();
  }

}
