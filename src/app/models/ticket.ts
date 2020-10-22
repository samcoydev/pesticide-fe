import { User } from './user';

export class Ticket {
    ID: number;
    title: string;
    description: string;
    timestamp: Date;
    assignedUser: User;
}