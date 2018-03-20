class FakeAuth {
    public isAuthenticated : boolean = false ;

    public login( _Callback : () => void ):void{
        this.isAuthenticated = true ;
        setTimeout(_Callback,1000);
    }
    public logout( _Callback : () => void ):void{
        this.isAuthenticated = false ;
        setTimeout(_Callback , 1000);
    }
}

let FakeAuthenticator : FakeAuth = new FakeAuth();
export = FakeAuthenticator ;