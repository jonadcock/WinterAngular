import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: []
})
export class RegistrationComponent implements OnInit {

  constructor(public service: UserService) { }

  ngOnInit() {
    this.service.formModel.reset();
  }

}
