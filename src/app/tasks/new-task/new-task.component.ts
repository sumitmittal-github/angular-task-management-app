import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {

  @Output()
  closePopupEvent: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  newTaskEvent: EventEmitter<Task> = new EventEmitter<Task>();

  enteredTitle: string = '';
  enteredSummary: string = '';
  enteredDueDate: string = '';

  closeNewTaskPopup(){
    this.closePopupEvent.emit();
  }

  onNewTaskSubmit(){
    // create a new task object
    const newTask: Task = new Task(this.enteredTitle, this.enteredSummary, this.enteredDueDate);
    this.newTaskEvent.emit(newTask);
    
    // close the popup
    this.closeNewTaskPopup();
  }

}