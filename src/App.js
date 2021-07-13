
import React, { Component} from 'react';
import { Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import {BrowserRouter as Router, Route,Switch,NavLink} from 'react-router-dom';
import Login from './loginnetflix';
import Movies from './movies';
import 'bootstrap/dist/css/bootstrap.min.css';
import './movies.css';
import LogoN from './pngegg.png'
// import bgNetflix from './image/Netflix-backgroud.png'
class App extends Component {
  render(){
    return(
      <div className="background">
      <Router>
      <div>
       <Nav>
         <NavbarBrand className="ml-5">
           <img src={LogoN} alt="Logo" style={{width:"250px"}}/>
         </NavbarBrand>
         <div style={{paddingLeft:"650px"}}>
         <Navbar>
           <Nav.Link><NavLink to={'/movies'} style={{textDecoration:"none",color:"white",fontSize:"32px"}}> Movie </NavLink></Nav.Link>
          <Nav.Link> <NavLink to={'/'} style={{textDecoration:"none",color:"white",fontSize:"32px"}}>Home</NavLink></Nav.Link>
         </Navbar>
         </div>
       </Nav>
        <Switch>
            <Route path='/movies' component={Movies} exact={true} />
            <Route exact path='/' component={Login}/>
        </Switch>
      </div> 
    </Router>
    </div>
    );
  }
}
export default App;
