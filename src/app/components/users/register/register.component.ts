import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public email = '';
  public password = '';

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  onAddUser() {
    this.authService.registerUser(this.email, this.password)
      .then((res) => {
        this.router.navigate(['admin', 'list-books']);
      }).catch(err => console.log('err', err.message));
  }

}
