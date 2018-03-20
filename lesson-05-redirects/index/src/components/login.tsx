import * as React from "react";

export class Login extends React.Component<{}, {}> {

    constructor( _Props : {} ){
        super(_Props);

        this.login = this.login.bind(this);
    }

    private login():void{
    }

    render() {
        return(
            <div className='page' >
                Please login first!
                <button onClick={this.login}>Login</button>
            </div>
        );
    }
}