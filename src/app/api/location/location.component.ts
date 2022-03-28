import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '@app/services/api.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  location:any = {}
  loadReady = false

  constructor(
    private service: ApiService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      let id = params['id'];
      this.service.getLocation(id).then((location) => {
        this.location = location;
        this.loadReady = true;
      })
    })
  }

}
