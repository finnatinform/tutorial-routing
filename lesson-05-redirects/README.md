# Step 05: Redirects
1. FakeAuth vorstellen (Anwendungsfall)
2. Anwendung zeigen
3. protected anpassen
4. login bauen
5. logout bauen (application)


## Changes:

Application
```tsx
    constructor( _Props : {} ){
        super(_Props);

        this.onUserButtonClick = this.onUserButtonClick.bind(this);
    }
    onUserButtonClick(): void {
        FakeAuthenticator.logout(() => { history.pushState( {} , "", "/" ); location.reload();} );
    }

    renderLogoutGgf() {
        if (FakeAuthenticator.isAuthenticated) {
            return (
                <li >
                    <button onClick={this.onUserButtonClick}>Logout</button>
                </li>
            );
        }
    }
```

Login
```tsx
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
```

Protected
```tsx
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
```
