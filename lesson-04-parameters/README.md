# Lesson 04: Parameter

## Anwendungsfall
Oft sind SPAs datensensitive Ansichten. Nutzer wollen sich vielleicht in ihrem Browser Lesezeichen auf bestimmte Datensätze anlegen.
Natürlich können auch über die URL Parameter übergeben werden.

## Beispiel: FELIOS Module
```tsx
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
```

## Route anlegen
```tsx
<Route path='/:module' component={FeliosModule} />
```

## Match abfragen
```tsx
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
```

## Generisches Menü
```tsx
private renderMenu():JSX.Element{
        let HItems : Array<JSX.Element>  = [] ;
        
        for( let HIndex : number = 0; HIndex < this.state.modules.length; HIndex++ ){
            HItems.push( <li><Link to={'/'+this.state.modules[HIndex]}>{this.state.modules[HIndex]}</Link></li> );
        }

        return <ul>{HItems}</ul> ;
    }
```
```tsx
                <header>
                    {this.renderMenu()}
                </header>
```