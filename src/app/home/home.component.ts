import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ApiService } from "../services/api.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
public characters:any
  constructor(
    private ApiService: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.ApiService.getCharacters().then(result => {
      this.characters = result.results
    })
  }

  goCharacter(id:any) {
    this.router.navigateByUrl(`character/${id}`);
  }
}
