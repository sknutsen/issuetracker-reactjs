import { Group } from "./Group";
import { User } from "./User";

export class Issue {
    public Id: number;
    public User: User;
    public Group: Group;
    public Title: string;
    public Description: string;
    public Severity: string;
    public PostedAt: Date;
    public UpdatedAt: Date;

    constructor(id: number, user: any, group: any, title: string, description: string, severity: string, postedAt: Date, updatedAt: Date) {
        this.Id = id;
        this.User = user;
        this.Group = group;
        this.Title = title;
        this.Description = description;
        this.Severity = severity;
        this.PostedAt = postedAt;
        this.UpdatedAt = updatedAt;
    }
}