import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "../../services/api.service";

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent implements OnInit {
  episode:any = {}
  loadReady = false

  constructor(
    private route: ActivatedRoute,
    private service: ApiService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      let id = params['id'];
      this.service.getEpisode(id).then((episode) => {
        this.episode = episode;
        this.loadReady = true;
        console.log(id)
      })
    })
  }

}
