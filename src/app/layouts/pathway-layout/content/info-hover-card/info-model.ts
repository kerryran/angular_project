export class info_model {
    job: string;
    openings: string;
    salary: string

    constructor(job: string, openings: string, salary: string) {
        this.job = job;
        this.openings = openings;
        this.salary = salary;
    }
}