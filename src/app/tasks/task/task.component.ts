import { Component, inject, Input } from '@angular/core';
import { Task } from './task.model';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
  imports: [CardComponent, DatePipe]
})
export class TaskComponent {

  @Input({required : true})
  task!: Task;

  private tasksService = inject(TasksService);
  
  onCompleteTask(taskId: number) {
    this.tasksService.completeTask(taskId);
  }


}