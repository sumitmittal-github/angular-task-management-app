import { Injectable } from '@angular/core';
import { DUMMY_TASKS } from '../../../public/dummy-tasks';
import { type Task } from './task/task.model';

@Injectable({providedIn: 'root'})
export class TasksService {

    private tasks: Task[] = DUMMY_TASKS;

    constructor() {
        const tasksFromLocalStorage = localStorage.getItem('tasks');
        if (tasksFromLocalStorage) {
            this.tasks = JSON.parse(tasksFromLocalStorage);
        }
    }

    private refreshLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }



    getUserTasks(userId: number) {
        return this.tasks.filter(t => t.userId === userId);
    }
    
    addTask(newTask: Task, userId: number) {
        newTask.id = new Date().getTime();  // generate a unique ID based on the current timestamp
        newTask.userId = userId;            // ensure the task is associated with the selected user
        this.tasks.push(newTask);
        this.refreshLocalStorage();
    }

    completeTask(taskId: number) {
        this.tasks = this.tasks.filter(t => t.id !== taskId);
        this.refreshLocalStorage();
    }


}