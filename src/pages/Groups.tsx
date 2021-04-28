import React, { useEffect } from 'react'
import { Group } from '../entities/Group';
import { GroupsTable } from '../components/Groups/GroupsTable';
import { GroupsForm } from '../components/Groups/GroupsForm';

interface GroupsProps {
    groups: Group[];
    updateGroups: () => void;
}

export const Groups: React.FC<GroupsProps> = ({groups, updateGroups}) => {
    useEffect(() => {
      updateGroups();
    }, [updateGroups]);

    return (
        <div>
            <GroupsTable groups={groups} />
            <GroupsForm updateGroups={updateGroups} />
        </div>
    );
}