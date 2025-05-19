import { Component, Input } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {

  @Input({required : true})
  selectedUserObj!: User;

}