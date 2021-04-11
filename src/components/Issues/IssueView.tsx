import React from 'react'
import { Issue } from '../../entities/Issue';

interface IssueViewProps {
    issue: Issue;
    selectIssue: (issue: any) => void;
}

export const IssueView: React.FC<IssueViewProps> = ({issue, selectIssue}) => {
    return (
        <div>
            <button className={"backButton"} onClick={() => selectIssue(undefined)}>Back</button>
            <br />
            <h2>{issue.Title}</h2>
            <h4>{issue.Group} - {issue.User} - {issue.Severity}</h4>
            <p>{issue.Description}</p>
        </div>
    );
}