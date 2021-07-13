import React from 'react'
class Login extends React.Component{
    render(){

    
    return(
        <div>
        <form>
        <div className="justify-content-inline">
        <div className="input-control"style={{marginTop:"300px",marginLeft:"450px",position:"relative",width:"380px"}}>
        <input className="form-control"type="email" placeholder="Enter your E-mail"/>
        <button style={{position:"absolute",marginLeft:"380px",marginTop:"-38px",cursor:"pointer"}}className="btn btn-success" type="submit">sign-in</button>
        </div>
        </div>
    </form>
    </div>
    ) 
    } 
}
export default Login;