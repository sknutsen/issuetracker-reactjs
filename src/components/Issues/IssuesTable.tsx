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
                    <th>Severity</th>
                    <th>User</th>
                </tr>
            </thead>
            <tbody>
                {issues.map((i, idx) => 
                    <tr key={i.Id} onClick={() => {selectIssue(i); console.log(i)}}>
                        <td>{idx}</td>
                        <td>{i.Id}</td>
                        <td>{i.Title}</td>
                        <td>{i.Severity}</td>
                        <td>{i.User?.Name ?? ""}</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}