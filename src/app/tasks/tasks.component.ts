import { Component, Input } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {

  @Input({required : true})
  selectedUserObj!: User;

}