import * as React from "react";
import FakeAuthenticator = require('./../fakeAuth');
import { Redirect } from "react-router";

export class Protected extends React.Component<{}, {}> {
    render() {
        if (FakeAuthenticator.isAuthenticated) {
            return (
                <div className='page' >
                    Super geheimer privat Inhalt.
                </div>
            );
        } else {
            return (<Redirect to='/login' />);
        }
    }
}