import { Group } from "./Group";
import { Issue } from "./Issue";

export class User {
    public Id: number;
    public Name: string;
    public Issues: Issue[] = [];
    public Groups: Group[] = [];

    constructor(id: number, name: string, issues: Issue[], groups: Group[]) {
        this.Id = id;
        this.Name = name;
        this.Issues = issues;
        this.Groups = groups;
    }
}