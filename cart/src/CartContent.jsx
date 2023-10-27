import React, {useState, useEffect} from 'react';

import Login from './Login'
import {login, jwt} from './cart'

const CartContent = () => {
    const [token, setToken] = useState('');

    useEffect(() =>{
      // login("sally", "123");
      return jwt.subscribe((val) => setToken(val ?? ""))
    },[])

  return (
    <div>
      <div>JWT: {token}</div>
      <Login />    
    </div>
  )
}

export default CartContent;

//1:06:26