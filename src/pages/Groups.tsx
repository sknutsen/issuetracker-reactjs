import React, { useState } from 'react'
import { Group } from '../entities/Group';
import { GroupsTable } from '../components/Groups/GroupsTable';
import { GetGroups } from '../handlers/groups';
import { GroupsForm } from '../components/Groups/GroupsForm';

export const Groups: React.FC = () => {
    const grparr: Group[] = [];
    const [groups, setGroups] = useState(grparr);

    async function updateGroups() {
        const data = await GetGroups();

        setGroups(data);
    }

    return (
        <div>
            <button onClick={async () => await updateGroups()}>Update table</button>
            <GroupsTable groups={groups} />
            <GroupsForm />
        </div>
    );
}