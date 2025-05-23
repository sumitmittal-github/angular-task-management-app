import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-task',
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {

  @Output()
  closePopupEvent: EventEmitter<void> = new EventEmitter<void>();

  closeNewTaskPopup(){
    this.closePopupEvent.emit();
  }

}