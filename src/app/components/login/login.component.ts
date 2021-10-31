import Swal from 'sweetalert2';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {LoginService} from '../../core/services/login-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup;
  height: number;

  // tslint:disable-next-line:variable-name
  constructor(
    private readonly _form: FormBuilder,
    private readonly _login: LoginService,
    private readonly route: Router) {
    this.height = window.innerHeight;
  }

  ngOnInit(): void {
    this.createFormLogin();
    this.loadUser();
  }

  // tslint:disable-next-line:typedef
  createFormLogin() {
    this.formLogin = this._form.group({
      username: [''],
      password: ['']
    });
  }

  // tslint:disable-next-line:typedef
  sendLogin() {
    this._login.sendLogin(this.formLogin.value).subscribe((data: any) => {
      if (data.data) {
        localStorage.setItem('user', JSON.stringify(data.user));
        this.route.navigate(['home/dashboard']);
      } else {
        Swal.fire({
          title: 'Error de acceso!',
          text: 'Por favor, verifica tu usuario o contraseña',
          icon: 'warning',
          confirmButtonText: 'Aceptar'
        });
      }

    });
  }

  loadUser() {
    let user: any = localStorage.getItem('user');
    if (user) {
      user = JSON.parse(user);
      if (user.data) {
        this.route.navigate(['']);
      }
    } else {
      this.route.navigate(['']);
    }
  }


}
