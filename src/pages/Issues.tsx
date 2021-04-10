import React, { useState } from 'react'
import { IssuesForm } from '../components/Issues/IssuesForm';
import { IssuesTable } from '../components/Issues/IssuesTable';
import { Issue } from '../entities/Issue';
import { GetIssues } from '../handlers/issues';

export const Issues: React.FC = () => {
    const issarr: Issue[] = [];
    const [issues, setIssues] = useState(issarr);

    async function updateIssues() {
        const data = await GetIssues();

        setIssues(data);
    }

    return (
        <div>
            <button onClick={async () => await updateIssues()}>Update table</button>
            <IssuesTable issues={issues} />
            <IssuesForm />
        </div>
    );
}