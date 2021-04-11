import React from 'react'
import { Issue } from '../../entities/Issue';

interface IssueViewProps {
    issue: Issue;
}

export const IssueView: React.FC<IssueViewProps> = ({issue}) => {
    return (
        <div>
            <h2>{issue.Title}</h2>
            <h4>{issue.Severity}</h4>
            <p>{issue.Description}</p>
        </div>
    );
}