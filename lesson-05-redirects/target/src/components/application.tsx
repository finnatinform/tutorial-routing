import * as React from "react";
// Manchmalö findet man beispiele mit nur dem low level Router "router". Das ist überholt und man sollte einen genaueren router wählen
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { Public } from './public';
import { Protected } from './protected';
import FakeAuthenticator = require('./../fakeAuth');
import { Login } from "./login";

export class Application extends React.Component<{}, {}> {
    constructor( _Props : {} ){
        super(_Props);

        this.onUserButtonClick = this.onUserButtonClick.bind(this);
    }
    onUserButtonClick(): void {
        FakeAuthenticator.logout(() => { history.pushState( {} , "", "/" ); location.reload();} );
    }

    renderLogoutGgf() {
        if (FakeAuthenticator.isAuthenticated) {
            return (
                <li >
                    <button onClick={this.onUserButtonClick}>Logout</button>
                </li>
            );
        }
    }

    render() {

        return (
            <div className="application">
                <header>
                    <ul>
                        <li>
                            <Link to='/public'>Public</Link>
                        </li>
                        <li>
                            <Link to='/protected'>Protected</Link>
                        </li>
                        {this.renderLogoutGgf()}

                    </ul>
                </header>

                <Route path="/public" component={Public} />
                <Route path="/protected" component={Protected} />
                <Route path="/login" component={Login} />
            </div>
        );
    }
}