import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import {
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { UserService } from './shared/user.service';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CharacterComponent } from './components/character/character.component';
import { TeamComponent } from './components/team/team.component';
import { TeamService } from 'src/app/services/team.service';
import { CharacterService } from './services/character.service';
import { CharacterIndexComponent } from './components/character/character-index/character-index.component';
import { CharacterCreateComponent } from './components/character/character-create/character-create.component';
import { CharacterDetailComponent } from './components/character/character-detail/character-detail.component';
import { CharacterEditComponent } from './components/character/character-edit/character-edit.component';
import { LoginComponent } from './components/user/login/login.component';
import { LogoutComponent } from './components/user/logout/logout.component';
import { CharacterDeleteComponent } from './components/character/character-delete/character-delete.component';
import { TeamIndexComponent } from './components/team/team-index/team-index.component';
import { TeamCreateComponent } from './components/team/team-create/team-create.component';
import { TeamEditComponent } from './components/team/team-edit/team-edit.component';
import { TeamDetailComponent } from './components/team/team-detail/team-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegistrationComponent,
    HomeComponent,
    NavComponent,
    AboutComponent,
    ContactComponent,
    CharacterComponent,
    TeamComponent,
    CharacterIndexComponent,
    CharacterCreateComponent,
    CharacterDetailComponent,
    CharacterEditComponent,
    LoginComponent,
    LogoutComponent,
    CharacterDeleteComponent
    TeamIndexComponent,
    TeamCreateComponent,
    TeamEditComponent,
    TeamDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
  ],
  providers: [
    UserService,
    CharacterService,
    TeamService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
