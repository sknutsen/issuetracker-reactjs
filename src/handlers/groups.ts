import { getAccessToken } from "../accessToken";
import { apiUrl } from "../constants";
import { Group } from "../entities/Group";

export const GetGroups = async () => {
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

    return data;
};

export const GetGroup = async (id: number) => {
    const response = await fetch(`${apiUrl}/groups/${id}`, {
        method: 'GET', 
        headers: {
            'Content-Type': 'application/json; charset=UTF-8', 
            'authorization': `bearer ${getAccessToken()}`
        }, 
        mode: "cors", 
        credentials: "include"
    });

    const data = await response.json();

    return data;
};

export const PutGroup = async (group: Group) => {
    const response = await fetch(`${apiUrl}/groups/${group.Id}`, {
        method: 'PUT', 
        headers: {
            'Content-Type': 'application/json; charset=UTF-8', 
            'authorization': `bearer ${getAccessToken()}`
        }, 
        mode: "cors", 
        credentials: "include",
        body: JSON.stringify(group)
    });

    const data = await response.json();

    return data;
};

export const PostGroup = async (group: Group) => {
    const response = await fetch(`${apiUrl}/groups`, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json; charset=UTF-8', 
            'authorization': `bearer ${getAccessToken()}`
        }, 
        mode: "cors", 
        credentials: "include",
        body: JSON.stringify(group)
    });

    const data = await response.json();

    return data;
};

export const DeleteGroup = async (id: number) => {
    const response = await fetch(`${apiUrl}/groups/${id}`, {
        method: 'DELETE', 
        headers: {
            'Content-Type': 'application/json; charset=UTF-8', 
            'authorization': `bearer ${getAccessToken()}`
        }, 
        mode: "cors", 
        credentials: "include"
    });

    const data = await response.json();

    return data;
};