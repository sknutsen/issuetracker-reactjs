import { authUrl } from "../constants";

export const register = async (email: string, password: string) => {
    console.log(email, password);
    const user = {"uname": email, "pword": password};
    const response = await fetch(`${authUrl}/register`, {
        method: 'POST', 
        body: JSON.stringify(user), 
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }, 
        mode: "cors"
    });
    
    switch (response.status) {
        case 200:
            console.log("Registration successful");
            break;
        default:
            console.log(`Server responded with code ${response.status}`);
            break;
    };
};