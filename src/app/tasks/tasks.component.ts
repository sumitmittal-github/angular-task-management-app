import { Component, Input } from '@angular/core';
import { User } from '../user/user.model';
import { TaskComponent } from "./task/task.component";
import { Task } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {

  @Input({required : true})
  selectedUserObj!: User;

  displayAddNewTaskGrid: boolean = false;

  constructor(private tasksService : TasksService) {
  }



  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.selectedUserObj.id);
  }

  openNewTaskPopup(){
    this.displayAddNewTaskGrid = true;
  }

  closeNewTaskPopup(){
    this.displayAddNewTaskGrid = false;
  }

  createNewTask(newTask: Task) {
    this.tasksService.addTask(newTask, this.selectedUserObj.id);
  } 


}