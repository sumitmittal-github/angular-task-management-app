import { Component, inject, Input } from '@angular/core';
import { Task } from './task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {

  @Input({required : true})
  task!: Task;

  private tasksService = inject(TasksService);
  
  onCompleteTask(taskId: number) {
    this.tasksService.completeTask(taskId);
  }


}