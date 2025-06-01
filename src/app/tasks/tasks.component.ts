import { Component, Input } from '@angular/core';
import { User } from '../user/user.model';
import { TaskComponent } from "./task/task.component";
import { Task } from './task/task.model';
import { DUMMY_TASKS } from '../../../public/dummy-tasks';
import { NewTaskComponent } from './new-task/new-task.component';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {

  @Input({required : true})
  selectedUserObj!: User;

  tasks: Task[] = DUMMY_TASKS;

  displayAddNewTaskGrid: boolean = false;

  get selectedUserTasks() {
    return this.tasks.filter(t => t.userId === this.selectedUserObj.id);
  }

  markTaskAsComplete(taskId: number) {
    this.tasks = this.tasks.filter(t => t.id !== taskId);
  }

  openNewTaskPopup(){
    this.displayAddNewTaskGrid = true;
  }

  closePopupGrid(){
    this.displayAddNewTaskGrid = false;
  }

  createNewTask(newTask: Task) {
    // add the new task to the tasks array
    newTask.userId = this.selectedUserObj.id; // ensure the task is associated with the selected user
    this.tasks.push(newTask);
  } 


}