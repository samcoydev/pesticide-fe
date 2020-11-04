import { Role } from '../_helpers/role';

export class User {
    ID: string;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    email: string;
    role: Role;
    token: string;
}