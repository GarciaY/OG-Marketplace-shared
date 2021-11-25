import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {

  constructor(private alertController: AlertController) { }
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'basic-alert',
      header: 'Edit Avatar',
      // subHeader: 'Alert Subtitle',
      // message: 'Order Confirmed',
      buttons: ['Add Photo', 'Cancel'] 
    });

    await alert.present();
  }
  ngOnInit() {
  }

}
