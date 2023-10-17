import React, { useState } from 'react'
import axios from 'axios'
import './Login.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Login({ setIsLogin }) {
  const [user, setUser] = useState({
    name: " ", email: " ", password: " "
  })

  const [err, setErr] = useState('')

  const onChangeInput = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value })
    setErr('')
  }
  //fetching register user 
  const registerSubmit = async e => {
    e.preventDefault()
    try {
      const res = await axios.post('/user/register', {
        username: user.name,
        email: user.email,
        password: user.password
      })
      setUser({ name: " ", email: " ", password: " " })
      setErr(res.data.msg)

    } catch (err) {
      err.response.data.msg && setErr(err.response.data.msg)
    }
  }

  //login
  const loginSubmit = async e => {
    e.preventDefault()
    try {
      const res = await axios.post('/user/login', {
        email: user.email,
        password: user.password
      })
      setUser({ name: " ", email: " ", password: " " })
      localStorage.setItem('tokenStore', res.data.token)
      setIsLogin(true)
    } catch (err) {
      err.response.data.msg && setErr(err.response.data.msg)
    }
  }

  //Visibility
  const[onLoging, setOnLogin] = useState(false)
  const style = {
    visibility: onLoging? "visible" : "hidden",
    opacity: onLoging? 1:0
  }

  return (

    <section className='login-page'>
      
      {/* **************Login********** */}
      <div className="login-signup">
       <div className="outer">
      <div className="inner">
        <form onSubmit={loginSubmit}>

          <h3>Log in</h3>

          <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" placeholder="Enter email" name='email'
             required value={user.email} onChange={onChangeInput} />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter password" name='password'
             required value={user.password} onChange={onChangeInput}  />
          </div>

          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="customCheck1" />
              <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
            </div>
          </div>

          <div class="d-grid gap-2">
              <button class="btn btn-primary" type="submit">Sign In</button>
            </div>
            <p className="next_page">
            You don't have an account? <span onClick={()=>setOnLogin(true)}>Register now</span>
            </p>
          <h4>{err}</h4>
        </form>

      </div>
    </div>


    {/* ************Register******* */}

      <div className="outer" style={style}>
        <div className="inner">
          <form onSubmit={registerSubmit}>
            <h3>Register</h3>

            <div className="form-group">
              <label>Full Name</label>
              <input type="text" className="form-control"  placeholder="Full Name" name='name'
               required  value={user.name} onChange={onChangeInput} />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" placeholder="Enter email" name='email'
               value={user.email} required onChange={onChangeInput} />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Enter password" name='password'
              value={user.password} required  onChange={onChangeInput}  />
            </div>

            <div class="d-grid gap-2">
              <button class="btn btn-primary" type="submit">Register</button>
            </div>
            <p className="next_page">
            You have an account? <span onClick={()=>setOnLogin(false)} >Login Now</span>
            </p>
            <h4 >{err}</h4>
          </form>
        </div>
      </div>
      </div>

    </section>
  )
}

export default Login