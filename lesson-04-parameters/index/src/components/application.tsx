import * as React from "react";
// Manchmalö findet man beispiele mit nur dem low level Router "router". Das ist überholt und man sollte einen genaueren router wählen
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { NotFound } from './not-found' ;

export class Application extends React.Component<{}, {}> {
    render() {

        return (
            <div className="application">
                <header>
                </header>
                <Switch>
                    
                    <Route component={NotFound} />
                </Switch>
            </div>
        );
    }
}