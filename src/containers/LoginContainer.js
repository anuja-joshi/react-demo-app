import React, {useState} from 'react';
import Login from './../components/Login';
import * as yup from 'yup';

import apiHelper from './../apis/apiHelper';
import {API_HOST_URL} from './../shared/appConstant'

const LoginContainer = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [usernameError, setUsernameError] = useState(null)
  const [passwordError, setPasswordError] = useState(null)

  let schema = yup.object().shape({
    username: yup.string().email().required(),
    password: yup.string().min(6).required(),
  });

  const validateData = () => {
    console.log(username, password)
    schema.validate({username, password}, { abortEarly: false}).then(() => {
      setUsernameError(null);
      setPasswordError(null);
      console.log("///", API_HOST_URL)
      apiHelper('post', `${API_HOST_URL}/auth`, {username, password, type: 'normal'}).then((response) => {
        alert('logged in')
      })
      .catch((err) => {
        console.log(err.response.data)
      })
    })
    .catch((err) => {
      err.inner.forEach((ele) => {
        // dispatch({ type: `${ele.path}Error`, value: ele.message });
        if (ele.path === 'username') setUsernameError(ele.message);
        if (ele.path === 'password') setPasswordError(ele.message);
      });
    })
  }

  return (
    <Login
      username={username}
      password={password} 
      setUsername={setUsername}
      setPassword={setPassword}
      usernameError={usernameError}
      passwordError={passwordError}
      validateData={validateData} />
  )
}

export default LoginContainer;