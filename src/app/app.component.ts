import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './user/dummy-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [HeaderComponent, UserComponent]
})
export class AppComponent {
  
  title = 'first-angular-app';
  users = DUMMY_USERS;

  onSelectUser (id : string) {
    console.log(id);
  }

}