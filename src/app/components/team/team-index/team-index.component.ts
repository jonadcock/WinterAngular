import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';
import { TeamDetail } from 'src/app/models/TeamDetail';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-team-index',
  templateUrl: './team-index.component.html',
  styleUrls: ['./team-index.component.css']
})
export class TeamIndexComponent implements OnInit {

  columnNames = ['details', 'TeamId', 'TeamName', 'TotalPoints', 'Characters'];

  constructor(private _teamService: TeamService) { }
  
  dataSource: MatTableDataSource<TeamDetail>

  ngOnInit() {
    this._teamService.getTeams().subscribe((teams: TeamDetail[]) => {
      this.dataSource = new MatTableDataSource<TeamDetail>(teams);
    });

    console.log(this.dataSource);
  }

}
