import React, { useState } from 'react'
import { PostIssue } from '../../handlers/issues';

interface IssuesFormProps {
    updateIssues: () => void;
}

export const IssuesForm: React.FC<IssuesFormProps> = ({updateIssues}) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [severity, setSeverity] = useState("Low");

    return (
        <form onSubmit={async (e) => {
            e.preventDefault();
            
            await PostIssue(title, description, severity);
            updateIssues();

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