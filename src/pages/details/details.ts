import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular'
import { ToastController } from 'ionic-angular';

import arrUser from '../../app/ArrayUser';
import {User} from '../../app/User';
import { InformationPage } from '../information/information';
/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController,public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

  addUser(name,surname,email)
  {
    

      if(name==email && surname==email)
      {
        
          const toast = this.toastCtrl.create({
            message: 'Name cannot be the same as email',
            showCloseButton: true,
            closeButtonText: 'Ok',
            position:'middle'
          });
          toast.present();

      }
      else if(name != email && surname!=null)
      {

        if(name!=null && email !=null){
          const confirm = this.alertCtrl.create({
            title: 'Confirm?',
            message: 'Are these the correct values? Full Name: ' + name+'  & Email Address: ' + email,
            buttons: [
              {
                text: 'No',
                handler: () => {
                  console.log('Disagree clicked');
                  this.navCtrl.setRoot(DetailsPage);
                }
              },
              {
                text: 'Yes',
                handler: () => {
                  console.log('Agree clicked');
                  let objN= new User(name,surname,email);
                  arrUser.push(objN);
                  this.navCtrl.setRoot(InformationPage);
                  console.log(arrUser);
  
                }
              }
            ]
          });
          confirm.present();
  
        }
      }
      
  }
}
