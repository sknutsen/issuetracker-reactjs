import React, { useState } from 'react'
import { IssuesForm } from '../components/Issues/IssuesForm';
import { IssuesTable } from '../components/Issues/IssuesTable';
import { IssueView } from '../components/Issues/IssueView';
import { Issue } from '../entities/Issue';
import "../style/Issues.css";
import "../style/Global-style.css";

interface IssuesProps {
    issues: Issue[];
    updateIssues: () => void;
}

export const Issues: React.FC<IssuesProps> = ({issues, updateIssues}) => {
    const iss: Issue | undefined = undefined;
    const [issue, setIssue] = useState(iss);

    if (issues.length === 0) {
        return (
            <button onClick={updateIssues}>
                Refresh list
            </button>
        );
    }

    return (
        <div className={"container"}>
            {issue !== undefined ? (
                <IssueView issue={issue!} selectIssue={setIssue} />
            ) : (
                <>
                    <IssuesTable issues={issues} selectIssue={setIssue} />
                    <IssuesForm updateIssues={updateIssues} />
                </>
            )}
            
        </div>
    );
}