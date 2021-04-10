import { getAccessToken, setAccessToken } from "../accessToken";
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
    const { accessToken } = await response.json();
    setAccessToken(accessToken);
    return response;
}