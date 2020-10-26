import { User } from './user';

export class Ticket {
    ID: number;
    title: string;
    description: string;
    timestamp: Date;
    assigneduseremail: string;
    creator: string;
    prioritylevel: number;
    deadline: Date;
    status: number;
}