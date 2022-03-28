import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario = {
    email: '',
    password: ''
  }
  
  Ingresar(){
    console.log(this.usuario)
    const {email, password} = this.usuario;
    this.authService.login(email, password).then(res => {
      console.log('Se registro con exito:: ', res)
      this.router.navigateByUrl('home')
    })
  }

  IngresarGoogle(){
    console.log(this.usuario)
    const {email, password} = this.usuario;
    this.authService.loginWithGoogle(email, password).then(res => {
      console.log('Se registro con exito por Google:: ', res)
    })
  }

  obtenerUsuarioLogeado() {
this.authService.getUserLogged().subscribe(res => {
  console.log(res?.email)
})
  }

  Logout() {
this.authService.logouth()
  }

  constructor(
    private authService: AuthService,
    private router: Router
  ) {

   }

  ngOnInit(): void {
  }

}
