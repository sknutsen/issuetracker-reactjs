import React from 'react'
import { Group } from '../../entities/Group';

interface GroupsTableProps {
    groups: Group[];
}

export const GroupsTable: React.FC<GroupsTableProps> = ({groups}) => {
    return (
        <table width={"100%"}>
            <thead>
                <tr>
                    <th>Row</th>
                    <th>Id</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {groups.map((g, i) => 
                    <tr key={g.Id}>
                        <td>{i}</td>
                        <td>{g.Id}</td>
                        <td>{g.Name}</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}