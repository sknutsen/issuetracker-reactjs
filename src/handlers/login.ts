import { setAccessToken } from "../accessToken";
import { authUrl } from "../constants";

export const login = async (email: string, password: string) => {
    console.log(email, password);
    const user = {"uname": email, "pword": password};
    const response = await fetch(`${authUrl}/login`, {
        method: 'POST', 
        body: JSON.stringify(user), 
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }, 
        mode: "cors",
        credentials: "include"
    });
    const data = await response.json();
    console.log(data);
    
    switch (response.status) {
        case 200:
            console.log("Login successful");
            setAccessToken(data.accessToken);
            break;
        default:
            console.log(`Server responded with code ${response.status}`);
            break;
    };
};