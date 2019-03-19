import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-index',
  templateUrl: './team-index.component.html',
  styleUrls: ['./team-index.component.css']
})
export class TeamIndexComponent implements OnInit {

  columnNames = ['details', 'TeamId', 'TeamName', 'TotalPoints', 'Characters'];

  constructor() { }

  ngOnInit() {
  }

}
