import React, { useState } from 'react'
import { Group } from '../../entities/Group';
import { PostGroup } from '../../handlers/groups';

interface GroupsFormProps {

}

export const GroupsForm: React.FC<GroupsFormProps> = () => {
    const [name, setName] = useState("");

    return (
        <form onSubmit={async (e) => {
            e.preventDefault();
            const group: Group = {
                Id: 0,
                Name: name
            };
            console.log(group);
            await PostGroup(group);
        }}>
            <input type={"text"} placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <br />
            <input type="submit" />
        </form>
    );
}