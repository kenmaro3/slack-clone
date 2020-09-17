import React from 'react'
import "./Login.css";
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import {useStateValue} from './StateProvider';
import {actionTypes} from "./reducer";

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = (e) =>{
        // e.priventDefault();
        auth
            .signInWithPopup(provider)
            .then(result => {
                console.log(result);
                dispatch({
                    type:actionTypes.SET_USER,
                    user: result.user
                })
            })
            .catch((error) => {
                alert(error.message);
            });

    }

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://editorial.designtaxi.com/editorial-images/news-logo28022019/1.jpg"
                     alt=""
                />
                <h1>Sign in to My Awesome Slack Clone</h1>
                <p>slack.com</p>
                <Button onClick={signIn}>Sign In with Google </Button>

            </div>
        </div>
    )
}

export default Login
