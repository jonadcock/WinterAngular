import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../../services/character.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from 'src/app/models/Character';

@Component({
  selector: 'app-character-delete',
  templateUrl: './character-delete.component.html',
  styleUrls: ['./character-delete.component.css']
})
export class CharacterDeleteComponent implements OnInit {

  character: Character;

  constructor(private _characterService: CharacterService, private _ar: ActivatedRoute, private _router: Router) {
    this._ar.paramMap.subscribe(p => {
      this._characterService.getCharacterById(p.get('id')).subscribe((singleCharacter: Character) => {
        this.character = singleCharacter;
      });
    });
   }

  ngOnInit() {
  }

  onDelete() {
    this._characterService.deleteCharacter(this.character.CharacterId).subscribe(() => {
      this._router.navigate(['/characters']);
    });
  }

}
