import { Component, Input } from '@angular/core';
import { User } from '../models/user';
import { TaskComponent } from "./task/task.component";
import { Task } from '../models/task';
import { DUMMY_TASKS } from '../../../public/dummy-tasks';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {

  @Input({required : true})
  selectedUserObj!: User;

  tasks: Task[] = DUMMY_TASKS;

  get selectedUserTasks() {
    return this.tasks.filter(t => t.userId === this.selectedUserObj.id);
  }

  

}