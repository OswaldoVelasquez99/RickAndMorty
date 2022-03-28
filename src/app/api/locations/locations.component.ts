import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { ApiService } from '@app/services/api.service'; 

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
  locations:any = {}

  constructor(
    private service: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.service.getLocations().then((response) => {
      this.locations = response.results
    })
  }

  goToLocation(id:any) {
    this.router.navigateByUrl(`location/${id}`)
  }

}
