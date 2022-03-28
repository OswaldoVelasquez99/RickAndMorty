import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userLogged = this.authService.getUserLogged();

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  logout(){
    this.authService.logouth()
    this.router.navigateByUrl('login')
  }

}
