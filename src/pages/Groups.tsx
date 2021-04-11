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

    //updateGroups().then();

    return (
        <div>
            <GroupsTable groups={groups} />
            <GroupsForm updateGroups={updateGroups} />
        </div>
    );
}