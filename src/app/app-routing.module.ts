import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavComponent } from './components/nav/nav.component';
import { CharacterIndexComponent } from './components/character/character-index/character-index.component';
import { CharacterCreateComponent } from './components/character/character-create/character-create.component';
import { CharacterDetailComponent } from './components/character/character-detail/character-detail.component';
import { CharacterEditComponent } from './components/character/character-edit/character-edit.component';
import { CharacterDeleteComponent } from './components/character/character-delete/character-delete.component';
import { LoginComponent } from './components/user/login/login.component';
import { LogoutComponent } from './components/user/logout/logout.component';
import { TeamComponent } from './components/team/team.component';
import { TeamIndexComponent } from './components/team/team-index/team-index.component';
import { TeamDetailComponent } from './components/team/team-detail/team-detail.component';
import { TeamEditComponent } from './components/team/team-edit/team-edit.component';
import { TeamCreateComponent } from './components/team/team-create/team-create.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'nav', component: NavComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'user', component: UserComponent, children: [
      { path: 'registration', component: RegistrationComponent },
      { path: 'login', component: LoginComponent },
      { path: 'logout', component: LogoutComponent }
    ]
  },
  { path: 'characters', children: [
    { path: '', component: CharacterIndexComponent },
    { path: 'create', component: CharacterCreateComponent },
    { path: 'detail/:id', component: CharacterDetailComponent },
    { path: 'edit/:id', component: CharacterEditComponent },
    { path: 'delete/:id', component: CharacterDeleteComponent }
  ]},
  {
    path: 'team', component: TeamIndexComponent, children: [
      { path: 'detail', component: TeamDetailComponent },
      { path: 'edit', component: TeamEditComponent },
      { path: 'create', component: TeamCreateComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
