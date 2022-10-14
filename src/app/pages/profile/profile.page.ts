import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  result: string;

  constructor(private actionSheetCtrl: ActionSheetController) { }
  
  async presentActionSheet(){
    const actionSheet = await this.actionSheetCtrl.create({
      header: "Example Header",
      subHeader: "Example Subheader",
      mode: "ios",
      cssClass: "custom-action",
      animated: true,
      backdropDismiss: true,
      keyboardClose: false,
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Share',
          data: {
            action: 'share',
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data:{
            action: 'cancel',
          },
        },
      ],
    });
    await actionSheet.present();
  }
  ngOnInit() {
  }
  showPersonal(){
    document.querySelector('.option').classList.add('hide');
    document.querySelector('.personal').classList.add('show');
  }
}
