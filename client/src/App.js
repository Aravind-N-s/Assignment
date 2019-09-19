import _ from 'lodash'
import './Config/App.css';
import React from 'react';

import {connect} from 'react-redux'
import 'react-tabs/style/react-tabs.css'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {BrowserRouter, Route, Link, Switch,} from 'react-router-dom'

import Login from './Component/User/Login'
import Logout from './Component/User/Logout'
import Account from './Component/User/Account'
import Register from './Component/User/Register'

import Order from './Component/Order/Order'

class App extends React.Component {
  render(){
    return (
      
      <BrowserRouter>
        {!_.isEmpty(this.props.user)?(
          <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
              <a className="navbar-brand">
                <img src="/2.jpg" width="30" height="30" className="d-inline-block align-top" alt=""/>MilkMaid</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <a className="nav-link">Home <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">Features</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">Pricing</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                  </li>
                </ul>
              </div>
            </nav>        
            <Link to="/users/account">Account</Link>
            <Switch>
              <>                
                <Route exact strict path="/users/account" component={Account}/>                     
                <Route exact strict path="/users/logout" component={Logout}/>    
              </>
            </Switch>      
          </div>
        ):(
          <div>
            <nav className="navbar navbar-dark bg-primary">
              <a className="navbar-brand">
                <img src="/2.jpg" width="30" height="30" className="d-inline-block align-top" alt=""/>
                MilkMaid
              </a>
            </nav>
            <div id="homepage">
              <img id="img" alt="loginImg" src="/1.jpeg"/>
              <Tabs id="tabs">
                  <TabList>
                      <Tab>Login</Tab>
                      <Tab>Register</Tab>
                  </TabList>
                  <TabPanel className={{marginBottom:"0%"}}><Login handleAuth={this.handleAuth}/></TabPanel>
                  <TabPanel><Register handleAuth={this.handleAuth}/></TabPanel>
              </Tabs>
            </div>
            <Order/>
            {/* <Switch>
              <>  
                
              </>   
            </Switch> */}
          </div>
        )}     
      </BrowserRouter>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}
// App = withRouter(App)
export default connect(mapStateToProps)(App)