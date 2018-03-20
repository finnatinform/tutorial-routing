import * as React from "react";
// Manchmalö findet man beispiele mit nur dem low level Router "router". Das ist überholt und man sollte einen genaueren router wählen
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { NotFound } from './not-found' ;
import { FeliosModule } from './felios-module' ;

export interface IApplicationState {
    modules : Array<string> ;
}

export class ApplicationState implements IApplicationState {
    modules: Array<string> = [ 'APS' , 'SPE' , 'CP' , 'DW' , 'PM' ] ;
}

export class Application extends React.Component<{}, IApplicationState> {

    constructor( _Props : {} ){
        super( _Props );
        this.state = new ApplicationState();
    }
    private renderMenu():JSX.Element{
        let HItems : Array<JSX.Element>  = [] ;
        
        for( let HIndex : number = 0; HIndex < this.state.modules.length; HIndex++ ){
            HItems.push( <li><Link to={'/'+this.state.modules[HIndex]}>{this.state.modules[HIndex]}</Link></li> );
        }

        return <ul>{HItems}</ul> ;
    }

    render() {

        return (
            <div className="application">
                <header>
                    {this.renderMenu()}
                </header>
                <Switch>
                    <Route path='/:module' component={FeliosModule} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        );
    }
}