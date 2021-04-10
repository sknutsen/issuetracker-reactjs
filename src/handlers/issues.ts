import { getAccessToken } from "../accessToken";
import { apiUrl } from "../constants";
import { Issue } from "../entities/Issue";

export const GetIssues = async () => {
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

    return data;
};

export const GetIssue = async (id: number) => {
    const response = await fetch(`${apiUrl}/issues/${id}`, {
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

export const PutIssue = async (issue: Issue) => {
    const response = await fetch(`${apiUrl}/issues/${issue.Id}`, {
        method: 'PUT', 
        headers: {
            'Content-Type': 'application/json; charset=UTF-8', 
            'authorization': `bearer ${getAccessToken()}`
        }, 
        mode: "cors", 
        credentials: "include",
        body: JSON.stringify(issue)
    });

    const data = await response.json();

    return data;
};

export const PostIssue = async (issue: Issue) => {
    console.log(issue);
    const response = await fetch(`${apiUrl}/issues`, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json; charset=UTF-8', 
            'authorization': `bearer ${getAccessToken()}`
        }, 
        mode: "cors", 
        credentials: "include",
        body: JSON.stringify(issue)
    });

    const data = await response.json();

    return data;
};

export const DeleteIssue = async (id: number) => {
    const response = await fetch(`${apiUrl}/issues/${id}`, {
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