import React from 'react';
import * as redux from 'react-redux';

import * as actions from 'actions';

export const Login = React.createClass({
    onLogin() {
        console.log('TEST');
        const { dispatch } = this.props;
        dispatch(actions.startLogin());
    },
    
    render() {
        return (
            <div><h1 className="page-title"> Todo App TEST</h1>
            <div className="row">
            <div className="columns small-centered small-10 medium-6 large-4">
            <div className="callout callout-auth">
            <h3> Login </h3>
            <p> Login with github account below </p>
            <button className="button" onClick={this.onLogin}> Login with GitHub</button>
            </div>
            </div>
            </div>
            </div>
        );
    }
});

export default redux.connect()(Login);
