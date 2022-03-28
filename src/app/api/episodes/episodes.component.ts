import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";
import { ApiService } from "../../services/api.service";


@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {
  episodes:any = {}

  constructor(
    private service: ApiService, 
    private router: Router
  ) { }

  ngOnInit() {
    this.service.getEpisodes().then((response) => {
      this.episodes = response.results;
      console.log(this.episodes)
    })
  }

  goToEpisode(id:any) {
    this.router.navigateByUrl(`episode/${id}`)
    console.log(this.router)
  }
}
