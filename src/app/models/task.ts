export class Task {

    id: number;
    userId: number;
    title: string;
    summary: string;
    dueDate: string;

    constructor(id: number, userId: number, title: string, summary: string, dueDate: string, status: string) {
        this.id = id;
        this.userId = userId;
        this.title = title;
        this.summary = summary;
        this.dueDate = dueDate;
    }

}