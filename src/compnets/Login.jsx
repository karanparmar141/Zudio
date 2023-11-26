import React, { useEffect, useState } from 'react'
import { Alert, Col } from 'react-bootstrap'
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
    setLogin(true)
  }

  useEffect(() => {
    localStorage.setItem("ProdcutList", JSON.stringify(userdata))
  }, [userdata])
  const HandelLogin = (e) => {
    e.preventDefault()

    userdata.map((e) => {
      let ema = 0
      let pas = 0
      if (e.email == user.email) {
        ema = 1
        console.log(ema)
        if (e.password == user.password) {
          pas = 1
          console.log(pas)
        }
      }
      console.log(ema)
      if (ema == 1) {
        if (pas == 1) {
          <Alert key='success' variant='success'>
            login successfull
          </Alert>
          console.log(pas)
        }
        else {
          <Alert key='warning' variant='warning'>
            please cheack password
          </Alert>
        }

      }
      else {
        <Alert key='warning' variant='warning'>
          please cheach email
        </Alert>
      }
    })
  }

  return (
    <>{
      login ?
        <Col sm={12} md={6} className='mx-auto my-5 py-5 ' style={{height: '65vh'}}>
          <form onSubmit={HandelLogin}>
            <input type="email" className='col-12 border border-3 border-black border-top-0 border-start-0 border-end-0 mb-4 text-capitalize' onChange={HandelInput} onChange={HandelInput} name='email' placeholder='enter your email' />
            <input type="password" className='col-12 border border-3 border-black border-top-0 border-start-0 border-end-0 mb-4 text-capitalize' onChange={HandelInput} onChange={HandelInput} name='password' placeholder='enter the password' />
            <input type="submit" className='btn btn-outline-primary text-uppercase col-12' value="login" />
          </form>
        </Col>
        :
        <Col sm={12} md={3} className='mx-auto my-5 py-5 ' style={{height: '65vh'}} >
        <form onSubmit={HandelSign}>
          <input type="text" className='col-12 border border-3 border-black border-top-0 border-start-0 border-end-0 mb-4 text-capitalize' onChange={HandelInput} name='username' placeholder='enter your username' />
          <input type="email" className='col-12 border border-3 border-black border-top-0 border-start-0 border-end-0 mb-4 text-capitalize' onChange={HandelInput} name='email' placeholder='enter your email' />
          <input type="password" className='col-12 border border-3 border-black border-top-0 border-start-0 border-end-0 mb-4 text-capitalize' onChange={HandelInput} name='password' placeholder='enter the password' />
          <input type="submit" value="sign-up" className='btn btn-outline-primary text-uppercase col-12' />
        </form>
        </Col>
    }</>
  )
}

export default Login