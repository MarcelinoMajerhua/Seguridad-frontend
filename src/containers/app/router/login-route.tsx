import React from 'react';
import {Route} from "react-router-dom";
import SignIn from "../../users/sign-in/sign-in";


function LoginRoute() {
    return (
        <React.Fragment>
            <Route exact path='/' component={SignIn} />
        </React.Fragment>
    );
}

export default LoginRoute;