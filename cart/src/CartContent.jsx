import React, {useState, useEffect} from 'react';
import {login, jwt} from './cart'

const CartContent = () => {
    const [token, setToken] = useState('');

  return (
    <div>JWT: {token}</div>
  )
}

export default CartContent;

//1:06:26