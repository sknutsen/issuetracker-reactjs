import React, { useState } from 'react'
import { Group } from '../entities/Group';
import { apiUrl } from "../constants";
import { getAccessToken } from '../accessToken';

interface GroupsProps {

}

export const Groups: React.FC<GroupsProps> = () => {
    const grparr: Group[] = [];
    const [groups, setGroups] = useState(grparr);

    async function updateGroups() {
        const response = await fetch(`${apiUrl}/groups`, {
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json; charset=UTF-8', 
                'authorization': `bearer ${getAccessToken()}`
            }, 
            mode: "cors", 
            credentials: "include"
        });
        const data = await response.json();

        setGroups(data);
    }

    return (
        <div>
            <button onClick={async () => await updateGroups()}>Update table</button>
            <table>
                <thead>
                    <tr>
                        <th>Row</th>
                        <th>Id</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {groups.map((g, i) => 
                        <tr>
                            <td>{i}</td>
                            <td>{g.Id}</td>
                            <td>{g.Name}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}