import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { ApiService } from 'src/app/services/api.service'

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  id:any = {}
  character:any = {}

  constructor(
    private activeRouter: ActivatedRoute,
    private service: ApiService
  ) { }

  ngOnInit(): void {
    //obtener el id de la ruta
    this.id = this.activeRouter.snapshot.paramMap.get('id');

    //llamar el servicio y le pasa el id
    this.service.getCharacter(this.id).then((character) => {
      this.character = character
    })
  }

}
