import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { RefreshToken } from "./pages/RefreshToken";
import { Registration } from "./pages/Registration";

export const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <div>
                <Nav />
                <br />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Registration} />
                    <Route exact path="/refresh" component={RefreshToken} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};