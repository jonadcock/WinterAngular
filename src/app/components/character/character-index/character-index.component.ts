import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../../services/character.service';
import { Character } from '../../../models/Character';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-character-index',
  templateUrl: './character-index.component.html',
  styleUrls: ['./character-index.component.css']
})
export class CharacterIndexComponent implements OnInit {

  columnNames = ['ImageLink', 'CharacterName', 'House', 'buttons'];

  constructor(private _characterService: CharacterService) { }

  dataSource: MatTableDataSource<Character>

  ngOnInit() {
    this._characterService.getCharacters().subscribe((characters: Character[]) => {
      this.dataSource = new MatTableDataSource<Character>(characters);
    });
  }

}
