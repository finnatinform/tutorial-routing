import * as React from "react";
import FakeAuthenticator = require('./../fakeAuth');
import { Redirect } from "react-router";

export class Login extends React.Component<{}, {}> {

    constructor( _Props : {} ){
        super(_Props);

        this.login = this.login.bind(this);
        this.onLoginSuccess = this.onLoginSuccess.bind(this);
    }

    private login():void{
        FakeAuthenticator.login( this.onLoginSuccess );
    }

    private onLoginSuccess():void{
        this.setState({
            redirectToReferrer : true
        });
    }

    render() {

        if( FakeAuthenticator.isAuthenticated ){
            return <Redirect to={'/protected'} />
        }

        return(
            <div className='page' >
                Please login first!
                <button onClick={this.login}>Login</button>
            </div>
        );
    }
}