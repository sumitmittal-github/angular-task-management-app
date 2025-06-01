import { Injectable } from '@angular/core';
import { DUMMY_TASKS } from '../../../public/dummy-tasks';
import { type Task } from './task/task.model';

@Injectable({providedIn: 'root'})
export class TasksService {

    private tasks: Task[] = DUMMY_TASKS;



    getUserTasks(userId: number) {
        return this.tasks.filter(t => t.userId === userId);
    }
    
    addTask(newTask: Task, userId: number) {
        newTask.id = new Date().getTime();  // generate a unique ID based on the current timestamp
        newTask.userId = userId;            // ensure the task is associated with the selected user
        this.tasks.push(newTask);
    }

    completeTask(taskId: number) {
        this.tasks = this.tasks.filter(t => t.id !== taskId);
    }


}