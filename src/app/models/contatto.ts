export class Contatto {
    email: string | undefined;
    firstName: string | undefined;
    lastName: string | undefined;
    age: number | undefined;
    job: string | undefined;
    description: string | undefined;

    constructor(
        email?: string,
        firstName?: string,
        lastName?: string,
        age?: number,
        job?: string,
        description?: string
    ) {
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.job = job;
        this.description = description;
    }
    
}
