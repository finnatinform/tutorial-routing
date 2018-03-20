import * as React from "react";
// Manchmalö findet man beispiele mit nur dem low level Router "router". Das ist überholt und man sollte einen genaueren router wählen
import { BrowserRouter } from 'react-router-dom' ;
import { Application } from './application' ;

export class AppRouter extends React.Component<{}, {}> {
    render() {

        return(
            <BrowserRouter>
                <Application />
            </BrowserRouter>
        );
    }
}