import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {

  @Input({required : true})
  task!: Task;

  @Output()
  completeTaskEvent = new EventEmitter<number>();
  
  onCompleteTask(taskId: number) {
    console.log('Marking this task as completed:', taskId);
    this.completeTaskEvent.emit(taskId);
  }
  




}
