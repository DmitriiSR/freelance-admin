import { Model } from 'sequelize-typescript';
interface UserCreationAttrs {
    email: string;
    full_name: string;
    password: string;
}
export declare class User extends Model<User, UserCreationAttrs> {
    id: number;
    full_name: string;
    email: string;
    password: string;
}
export {};
