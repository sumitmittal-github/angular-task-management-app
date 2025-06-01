import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {

  @Output()
  closePopupEvent: EventEmitter<void> = new EventEmitter<void>();

  enteredTitle: string = '';
  enteredSummary: string = '';
  enteredDueDate: string = '';

  closeNewTaskPopup(){
    this.closePopupEvent.emit();
  }

  onNewTaskSubmit(){
    console.log("Form submitted");
    console.log(this.enteredTitle);
    console.log(this.enteredSummary);
    console.log(this.enteredDueDate);
    this.closeNewTaskPopup();
  }

}