import React from 'react'
import { Issue } from '../../entities/Issue';

interface IssuesTableProps {
    issues: Issue[];
    selectIssue: (issue: any) => void;
}

export const IssuesTable: React.FC<IssuesTableProps> = ({issues, selectIssue}) => {
    return (
        <table width={"100%"}>
            <thead>
                <tr>
                    <th>Row</th>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Severity</th>
                    <th>User</th>
                    <th>Group</th>
                </tr>
            </thead>
            <tbody>
                {issues.map((i, idx) => 
                    <tr key={i.Id} onClick={() => selectIssue(i)}>
                        <td>{idx}</td>
                        <td>{i.Id}</td>
                        <td>{i.Title}</td>
                        <td>{i.Description}</td>
                        <td>{i.Severity}</td>
                        <td>{i.Group}</td>
                        <td>{i.User}</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}