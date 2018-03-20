import * as React from "react";
// Manchmalö findet man beispiele mit nur dem low level Router "router". Das ist überholt und man sollte einen genaueren router wählen
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { Public } from './public';
import { Protected } from './protected';
import FakeAuthenticator = require('./../fakeAuth');
import { Login } from "./login";

export class Application extends React.Component<{}, {}> {
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
                    </ul>
                </header>

                <Route path="/public" component={Public} />
                <Route path="/protected" component={Protected} />
                <Route path="/login" component={Login} />
            </div>
        );
    }
}