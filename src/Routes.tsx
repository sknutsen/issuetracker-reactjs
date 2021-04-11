import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Groups } from "./pages/Groups";
import { Home } from "./pages/Home";
import { Issues } from "./pages/Issues";
import { Login } from "./pages/Login";
import { Logout } from "./pages/Logout";
import { RefreshToken } from "./pages/RefreshToken";
import { Registration } from "./pages/Registration";

export const Routes: React.FC = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <BrowserRouter>
            <div>
                <Nav loggedIn={loggedIn} />
                <br />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/groups" component={Groups} />
                    <Route exact path="/issues" component={Issues} />
                    <Route exact path="/login" component={() => <Login logIn={setLoggedIn} />} />
                    <Route exact path="/logout" component={Logout} />
                    <Route exact path="/register" component={Registration} />
                    <Route exact path="/refresh" component={RefreshToken} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};