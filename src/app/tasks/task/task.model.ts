export class Task {

    id: number;
    userId: number;
    title: string;
    summary: string;
    dueDate: string;

    constructor(title: string, summary: string, dueDate: string);

    constructor(title: string, summary: string, dueDate: string, id?: number, userId?: number, status?: string) {
        this.title = title;
        this.summary = summary;
        this.dueDate = dueDate;
        this.id = id ?? 0;
        this.userId = userId ?? 0;
    }

}