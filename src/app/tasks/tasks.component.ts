import { Component, Input } from '@angular/core';
import { User } from '../user/user.model';
import { TaskComponent } from "./task/task.component";
import { Task } from './task/task.model';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
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

  markTaskAsComplete(taskId: number) {
    this.tasksService.completeTask(taskId);
  }

  openNewTaskPopup(){
    this.displayAddNewTaskGrid = true;
  }

  closePopupGrid(){
    this.displayAddNewTaskGrid = false;
  }

  createNewTask(newTask: Task) {
    this.tasksService.addTask(newTask, this.selectedUserObj.id);
  } 


}