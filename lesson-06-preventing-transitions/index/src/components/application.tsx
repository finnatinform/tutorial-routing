import * as React from "react";
// Manchmalö findet man beispiele mit nur dem low level Router "router". Das ist überholt und man sollte einen genaueren router wählen
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { About } from './about';
import { Contact } from './contact';
import { NotFound } from './not-found';
import { CoolesFormular } from './cool-form';

export class Application extends React.Component<{}, {}> {
    render() {

        return (
            <div className="application">
                <header>
                    <ul>
                        <li>
                            <Link to='/'>Formular</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact</Link>
                        </li>
                    </ul>
                </header>
                <Switch>
                    <Route path="/" exact component={CoolesFormular} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        );
    }
}