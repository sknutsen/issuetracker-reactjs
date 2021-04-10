import React, { useState } from 'react'
import { getAccessToken } from '../accessToken';
import { apiUrl } from '../constants';
import { Issue } from '../entities/Issue';

interface IssuesProps {

}

export const Issues: React.FC<IssuesProps> = () => {
    const issarr: Issue[] = [];
    const [issues, setIssues] = useState(issarr);

    async function updateIssues() {
        const response = await fetch(`${apiUrl}/issues`, {
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json; charset=UTF-8', 
                'authorization': `bearer ${getAccessToken()}`
            }, 
            mode: "cors", 
            credentials: "include"
        });
        const data = await response.json();

        setIssues(data);
    }

    return (
        <div>
            <button onClick={async () => await updateIssues()}>Update table</button>
            <table>
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
                        <tr>
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
        </div>
    );
}