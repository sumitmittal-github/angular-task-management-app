import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './task.model';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
  imports: [CardComponent, DatePipe]
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
