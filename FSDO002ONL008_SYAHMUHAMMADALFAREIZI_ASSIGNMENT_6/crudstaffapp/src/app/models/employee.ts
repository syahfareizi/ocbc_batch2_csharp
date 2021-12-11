import { Role } from "./role";

export interface Employee {
    title:string
    firstName:string
    lastName:string
    email:string
    role:Role
    password:string
    confirmPassword:string
}
