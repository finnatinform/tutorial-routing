import * as React from "react";
import { Prompt } from "react-router-dom";

export interface ICoolesFormularState{
    isBlocking : boolean ;
}

export class CoolesFormularState implements ICoolesFormularState{
    isBlocking : boolean = false ;
}

export class CoolesFormular extends React.Component<{}, ICoolesFormularState> {

    constructor( _Props : {} ){
        super(_Props);
        this.state = new CoolesFormularState();
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
    }

    private onFormSubmit( _Event : React.FormEvent<HTMLFormElement> ):void{
        _Event.preventDefault();
        _Event.currentTarget.reset();
        this.setState({
            isBlocking : false
        });
    }

    private onNameChange( _Event : React.FormEvent<HTMLInputElement> ):void{
        this.setState({
            isBlocking : _Event.currentTarget.value.length > 0 
        });
    }

    render() {

        return(
            <div className='page' >
                <form onSubmit={this.onFormSubmit} >
                    <Prompt when={this.state.isBlocking} message='Are you sure you want to leave?' />
                    <input name="name" placeholder="Name" onChange={this.onNameChange} />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}