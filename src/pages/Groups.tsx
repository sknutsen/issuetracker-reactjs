import React, { useEffect, useState } from 'react'
import { Group } from '../entities/Group';
import { GroupsTable } from '../components/Groups/GroupsTable';
import { GetGroups } from '../handlers/groups';
import { GroupsForm } from '../components/Groups/GroupsForm';

export const Groups: React.FC = () => {
    const grparr: Group[] = [];
    const [groups, setGroups] = useState(grparr);

    function updateGroups() {
        GetGroups().then(data => setGroups(data));
    }

    useEffect(() => {
      updateGroups();
    }, []);

    return (
        <div>
            <GroupsTable groups={groups} />
            <GroupsForm updateGroups={updateGroups} />
        </div>
    );
}