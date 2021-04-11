import { Issue } from "./Issue";
import { User } from "./User";

export class Group {
    public Id: number;
    public Name: string;
    public Issues: Issue[] = [];
    public Users: User[] = [];

    constructor(id: number, name: string, issues: Issue[], users: User[]) {
        this.Id = id;
        this.Name = name;
        this.Issues = issues;
        this.Users = users;
    }
}