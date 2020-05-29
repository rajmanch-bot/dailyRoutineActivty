import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {

  constructor(private router: Router, public atrCtrl: AlertController){}

  async showPromptAlert() {
    
    // console.log(this.signup);
 
     const alert = await  this.atrCtrl.create({
       header: 'OTP',
       message: '',
       inputs: [
         {
           name: 'Enter OTP',
           placeholder: '303090'
         }
       ],
       buttons: [
         {
           text: 'ok',
           role: 'ok',
           handler: data => {
           this.router.navigate(['/userprofile']);
           }
         }
       ]
     });
     await  alert.present();
   }

  todo = {}
  loginForm(){
    this.showPromptAlert();
    //alert("hell");
   // console.log(this.todo);
   //this.router.navigate(['/userprofile']);
   
  }
  
}
