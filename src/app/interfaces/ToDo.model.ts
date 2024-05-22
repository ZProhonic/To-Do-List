export interface Todo {
    task: string;
    completed: boolean;
    duration: number;
    priority?: 'LOW' | 'NORMAL' | 'HIGH';
}