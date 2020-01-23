import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public afAuth: AngularFireAuth,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  onLoginGoogle(): void {
    this.authService.loginGoogleUser()
    .then((res) => {
      console.log('resUser', res);
      this.router.navigate(['admin', 'list-books']);
    }).catch(err => console.log('err', err));
  }

  onLoginFacebook() {
    this.authService.loginFacebookUser();
    this.router.navigate(['admin', 'list-books']);
  }

  onLogout() {
    this.afAuth.auth.signOut();
  }

}
