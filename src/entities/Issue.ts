export class Issue {
    public Id: number;
    public User: any;
    public Group: any;
    public Title: string;
    public Description: string;
    public Severity: string;

    constructor(id: number, user: any, group: any, title: string, description: string, severity: string) {
        this.Id = id;
        this.User = user;
        this.Group = group;
        this.Title = title;
        this.Description = description;
        this.Severity = severity;
    }
}