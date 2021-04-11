import React, { useEffect, useState } from 'react'
import { IssuesForm } from '../components/Issues/IssuesForm';
import { IssuesTable } from '../components/Issues/IssuesTable';
import { IssueView } from '../components/Issues/IssueView';
import { Issue } from '../entities/Issue';
import { GetIssues } from '../handlers/issues';
import "../style/Issues.css";
import "../style/Global-style.css";

export const Issues: React.FC = () => {
    const issarr: Issue[] = [];
    const iss: Issue | undefined = undefined;
    const [issues, setIssues] = useState(issarr);
    const [issue, setIssue] = useState(iss);

    function updateIssues() {
        GetIssues().then(data => setIssues(data));
    }

    useEffect(() => {
      updateIssues();
    }, []);

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