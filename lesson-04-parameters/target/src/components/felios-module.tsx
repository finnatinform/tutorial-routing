import * as React from "react";
import { match } from 'react-router-dom' ;

export class FeliosModuleMatch{
    module : string ;
}

export interface IFeliosModuleProps{
    match : match<FeliosModuleMatch> ;
}

export class FeliosModule extends React.Component<IFeliosModuleProps, {}> {
    render() {

        return(
            <div className='page' >
                {this.props.match.params.module}
            </div>
        );
    }
}