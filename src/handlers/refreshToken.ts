import { getAccessToken } from "../accessToken";
import { authUrl } from "../constants";

export const refreshToken = async () => {
    const response = await fetch(`${authUrl}/refresh-token`, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json; charset=UTF-8', 
            'authorization': `bearer ${getAccessToken()}`
        }, 
        mode: "cors", 
        credentials: "include"
    });
    const data = await response.json();
    console.log(data);
    return;
}