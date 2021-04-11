import React, { useState } from 'react'
import { IssuesForm } from '../components/Issues/IssuesForm';
import { IssuesTable } from '../components/Issues/IssuesTable';
import { IssueView } from '../components/Issues/IssueView';
import { Issue } from '../entities/Issue';
import { GetIssues } from '../handlers/issues';

export const Issues: React.FC = () => {
    const issarr: Issue[] = [];
    const iss: Issue | undefined = undefined;
    const [issues, setIssues] = useState(issarr);
    const [issue, setIssue] = useState(iss);

    async function updateIssues() {
        const data = await GetIssues();

        setIssues(data);
    }

    //updateIssues().then();

    return (
        <div>
            {iss ? (
                <IssueView issue={issue!} />
            ) : (
                <>
                    <IssuesTable issues={issues} selectIssue={setIssue} />
                    <IssuesForm updateIssues={updateIssues} />
                </>
            )}
            
        </div>
    );
}