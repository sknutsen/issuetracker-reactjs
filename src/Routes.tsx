import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Group } from "./entities/Group";
import { Issue } from "./entities/Issue";
import { GetGroups } from "./handlers/groups";
import { GetIssues } from "./handlers/issues";
import { Groups } from "./pages/Groups";
import { Home } from "./pages/Home";
import { Issues } from "./pages/Issues";
import { Login } from "./pages/Login";
import { Logout } from "./pages/Logout";
import { RefreshToken } from "./pages/RefreshToken";
import { Registration } from "./pages/Registration";

export const Routes: React.FC = () => {
    const issarr: Issue[] = [];
    const grparr: Group[] = [];
    const [groups, setGroups] = useState(grparr);
    const [issues, setIssues] = useState(issarr);
    const [loggedIn, setLoggedIn] = useState(false);

    function updateGroups() {
        GetGroups().then(data => setGroups(data));
    }

    function updateIssues() {
        GetIssues().then(data => setIssues(data));
    }

    // updateGroups();
    // updateIssues();

    return (
        <BrowserRouter>
            <div>
                <Nav loggedIn={loggedIn} />
                <br />
                <Switch>
                    <Route exact path="/" component={() => <Home loggedIn={loggedIn} issues={issues} updateIssues={updateIssues} />} />
                    <Route exact path="/groups" component={() => <Groups groups={groups} updateGroups={updateGroups} />} />
                    <Route exact path="/issues" component={() => <Issues issues={issues} updateIssues={updateIssues} />} />
                    <Route exact path="/login" component={() => <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
                    <Route exact path="/logout" component={() => <Logout loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
                    <Route exact path="/register" component={Registration} />
                    <Route exact path="/refresh" component={RefreshToken} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};