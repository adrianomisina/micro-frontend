import React, {useEffect, useState} from 'react';
import {BehaviorSubject} from 'rxjs'

const API_SERVER = "http://localhost:8080";

export const jwt = new BehaviorSubject(null);
// jwt.subscribe((token)=> console.log(token));
// jwt.next(newValue)

export const login = (username, password) => {
    fetch(`${API_SERVER}/auth/login`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify ({
            username: username,
            password: password
        })
    })
    .then((response) => response.json())
    .then((data) => {
        jwt.next(data.access_token);
        //getCart();
        return data.access_token;
    })
}

export function useLoggedIn() {
    const [loggedIn, setLoggedIn] = useState(!!jwt.value);
    useEffect(()=>{
        setLoggedIn(!!jwt.value);
        return jwt.subscribe((c) => {
            setLoggedIn(!!jwt.value);
        })
    },[])
    return loggedIn;
}