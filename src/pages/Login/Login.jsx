import {Component}  from "react";

import LoginSideBar from '../../components/loginSideBar/loginSideBar.jsx'

import {Navigate} from 'react-router-dom'
import './Login.css'

class LoginWrapper  extends Component{
state = {email:"",password:"",error:false,errorText:""}

getApiCall = async (event) =>{
    event.preventDefault()
    const {email,password} = this.state 
    const userDetails = {email,password}
    const options ={
        method:"POST",
        body:JSON.stringify(userDetails)
    }
    const url = "https://csyibgv5y0.execute-api.eu-north-1.amazonaws.com/api/auth/signin"
    const response = await fetch(url,options)
    const data = await response.json()
    console.log(data)
    if(data.success){
        const token = data.data.token 
        localStorage.setItem('jwt_token',token)
        window.location.replace('/')
        
       
    }else{
        this.setState({error:true,errorText:data.message})
    }
}

onChangeUsername = (event) => {this.setState({email:event.target.value})}

onChangePassword = (event) => {this.setState({password:event.target.value})}

    render(){
        const {email,password} = this.state
        const token = localStorage.getItem('jwt_token')
       if(token !== null){
            return <Navigate to="/" replace/>
       }
        return (
            <div className="login-main-container">
                <LoginSideBar/>
                <div className="login-container">
                <form className="login-form" onSubmit={this.getApiCall}>
                    <h1 className="login-form-heading">Welcome back</h1>
                    <p className="login-form-para">Use your account email and password to continue</p>
                    <label className="login-form-label">EMAIL</label>
                    <input className="login-form-input" type="text" value={email} placeholder="Email" onChange={this.onChangeUsername}/>
                    <label className="login-form-label">PASSWORD</label>
                    <input className="login-form-input" type="password" value={password} placeholder="Password"  onChange={this.onChangePassword}/>
                    <button className="login-form-button" type="submit">Login</button>
                </form>
                </div>
            </div>
        )
    }
}

export default LoginWrapper 