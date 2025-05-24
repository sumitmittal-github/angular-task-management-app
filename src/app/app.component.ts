import { Component, EventEmitter, Output } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from '../../public/dummy-users';
import { TasksComponent } from "./tasks/tasks.component";
import { User } from './user/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [HeaderComponent, UserComponent, TasksComponent]
})
export class AppComponent {
  users : User[] = DUMMY_USERS;
  
  selectedUser?: User = DUMMY_USERS[0];

  onSelectUser (id : number) {
    this.selectedUser = this.users.find(u => u.id === id)!;
  }

}