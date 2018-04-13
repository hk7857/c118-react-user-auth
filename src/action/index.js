import types from './types';
import axios from 'axios';

export function signUp(cred){
    return (dispatch) => {
        axios.post('http://api.reactprototypes.com/signup', cred).then( resp => {
            console.log('Sign Up Response:', resp);
        })
    }
}

export function signIn(cred){
    return dispatch => {  //only for single parameter
        console.log('Sign In called with: ', cred);
        axios.post('http://api.reactprototypes.com/signin', cred).then( resp => {
            console.log('Sign in:', resp)
        })
    }
}

export function changeAuth(isAuth){
    return {
        type: types.CHANGE_AUTH,
        payload: isAuth
    }
}

export function handleInputChange(event){
    event.preventDefault();

    const { name, value } = event.target;

    return {
        type: types.INPUT_CHANGE,
        name: name,
        value: value
    };
}

export function formError (error){
    return {
        type: types.FORM_ERROR,
        error
    }
}

