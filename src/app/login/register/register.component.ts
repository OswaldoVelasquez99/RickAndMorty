import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/services/auth/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  usuario = {
    email: '',
    password: ''
  }
  
  Registrarse(){
    console.log(this.usuario)
    const {email, password} = this.usuario;
    this.authService.register(email, password).then(res => {
      console.log('Se registro con exito:: ', res)
      this.router.navigateByUrl('home')

    })
  }

  obtenerUsuarioLogeado() {
this.authService.getUserLogged().subscribe(res => {
  console.log(res?.email)
})
  }


  constructor(
    private authService: AuthService,
    private router: Router
  ) {

   }

  ngOnInit(): void {
  }

}
