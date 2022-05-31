export class User{
    name: string;
    age: number;
    email: string;
    password: string;

    constructor(email: string, password: string, name: string, age: number){
        this.email = email;
        this.password = password;
        this.name = name;
        this.age = age;
    }
}