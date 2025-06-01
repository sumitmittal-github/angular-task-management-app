import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Task } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {

  private tasksService = inject(TasksService);

  @Input({required: true})
  selectedUserId!: number;

  @Output()
  closePopupEvent: EventEmitter<void> = new EventEmitter<void>();

  enteredTitle: string = '';
  enteredSummary: string = '';
  enteredDueDate: string = '';

  closeNewTaskPopup(){
    this.closePopupEvent.emit();
  }

  onNewTaskSubmit(){
    // create a new task object
    const newTask: Task = new Task(this.enteredTitle, this.enteredSummary, this.enteredDueDate);
    this.tasksService.addTask(newTask, this.selectedUserId);
    
    // close the popup
    this.closeNewTaskPopup();
  }

}