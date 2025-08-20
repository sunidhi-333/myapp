import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonInput,
  IonButton
} from '@ionic/angular/standalone';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Security } from '../service/security';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonItem,      // ✅ Needed for <ion-item>
    IonLabel,     // ✅ Needed for <ion-label>
    IonInput,     // ✅ Needed for <ion-input>
    IonButton     // ✅ Needed for <ion-button>
  ]
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';
username: string = '';
_security: Security;
  loginUser() {
    console.log('Logging in with:', this.email, this.password);
  }

  constructor(_securityref: Security) {
    this._security = _securityref;
  }

  ngOnInit() {}
}
