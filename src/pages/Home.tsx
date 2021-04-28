import React, { useEffect } from 'react'
import { Issue } from '../entities/Issue';
import "../style/Page-style.css";

interface HomeProps {
    loggedIn: boolean;
    issues: Issue[];
    updateIssues: () => void;
}

export const Home: React.FC<HomeProps> = ({loggedIn, issues, updateIssues}) => {
    useEffect(() => {
        if (loggedIn) {
            updateIssues();
        }
      }, [loggedIn, updateIssues]);

    return (
        <div>
            <div>Home</div>
            {loggedIn ? (
                <table>
                    {issues.map((i, _idx) => 
                        <tr key={i.Id}>
                            <td>{i.Id}</td>
                            <td>{i.Title}</td>
                            <td>{i.Severity}</td>
                            <td>{i.User.Name}</td>
                            <td>{i.Group.Name}</td>
                        </tr>
                    )}
                </table>
            ) : (
                <></>
            )}
        </div>
    );
};