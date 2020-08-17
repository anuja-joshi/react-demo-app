import React, {useState} from 'react';
import Login from './../components/Login';


const LoginContainer = () => {
  const [username, setUsername] = useState('a')
  const [password, setPassword] = useState('a')

  const validateData = () => {
    console.log(username, password)
  }

  return (
    <Login
      username={username}
      password={password} 
      setUsername={setUsername}
      setPassword={setPassword}
      validateData={validateData} />
  )
}

export default LoginContainer;