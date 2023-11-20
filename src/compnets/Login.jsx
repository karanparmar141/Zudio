import React, { useEffect, useState } from 'react'
let instilize = {
  username: "",
  email: "",
  password: ""
}
const Login = () => {
  let [user, setUser] = useState(instilize)
  let [login, setLogin] = useState(false)
  let [userdata, setUserdata] = useState([])

  const HandelInput = (e) => {
    let { name, value } = e.target
    setUser((old) => ({ ...old, [name]: value }))
    console.log(user)
  }
  const HandelSign = (e) => {
    e.preventDefault();
    setUserdata([user, ...userdata])
  }

  useEffect(() => {
    localStorage.setItem("ProdcutList", JSON.stringify(userdata))
  }, [userdata])
  const HandelLogin=(e)=>{
      e.preventDefault()
      
  }

  return (
    <>{
      login ?
        <form onSubmit={HandelLogin}>
          <input type="text" onChange={HandelInput} name='username' />
          <input type="email" onChange={HandelInput} name='email' />
          <input type="password" onChange={HandelInput} name='password' />
          <input type="submit" value="login" />
        </form>
        :
        <form onSubmit={HandelSign}>
          <input type="text" onChange={HandelInput} name='username' placeholder='username' />
          <input type="email" onChange={HandelInput} name='email' placeholder='email' />
          <input type="password" onChange={HandelInput} name='password' placeholder='password' />
          <input type="submit" value="sign-up" />
        </form>
    }</>
  )
}

export default Login