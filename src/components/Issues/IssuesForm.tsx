import React, { useState } from 'react'
import { Issue } from '../../entities/Issue';
import { PostIssue } from '../../handlers/issues';

interface IssuesFormProps {
    updateIssues: () => Promise<void>;
}

export const IssuesForm: React.FC<IssuesFormProps> = ({updateIssues}) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [severity, setSeverity] = useState("Low");

    return (
        <form onSubmit={async (e) => {
            e.preventDefault();
            const issue: Issue = {
                Id: 0,
                User: 1,
                Group: 1,
                Title: title,
                Description: description,
                Severity: severity
            };
            
            await PostIssue(issue);
            await updateIssues();

            setTitle("");
            setDescription("");
            setSeverity("");
        }}>
            <input type={"text"} placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <br />
            <textarea rows={3} cols={50} placeholder={"Description"} value={description} onChange={(e) => setDescription(e.target.value)} draggable={false} maxLength={150}></textarea>
            <br />
            <select value={severity} onChange={(e) => setSeverity(e.target.value)}>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>
            <br />
            <input type="submit" />
        </form>
    );
}