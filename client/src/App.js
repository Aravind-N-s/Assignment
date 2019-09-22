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

import BrandDetails from './Component/Brand/Details'

import TypeDetails from './Component/Type/Details'

class App extends React.Component {
  render(props){
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
                    <button className="nav-link">Home</button> 
                  </li>
                  <li className="nav-item">
                    <button className="nav-link">Features</button>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link">Pricing</button>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link disabled">Disabled</button> 
                  </li>
                </ul>
              </div>
            </nav>        
            <Link to="/users/account">Account</Link><br/>
            <Link to="/brand">Brand</Link><br/>          
            <Link to="/type">Type</Link>            
            <Switch>
              <>                
                <Route exact strict path="/users/account" component={Account}/>                     
                <Route exact strict path="/users/logout" component={Logout}/>
                <Route exact strict path="/brand" component={BrandDetails}/>       
                <Route exact strict path="/type" component={TypeDetails}/>       
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
                    <Tab>Buy</Tab>
                    <Tab>Login</Tab>
                    <Tab>Register</Tab>
                  </TabList>
                  <TabPanel className={{marginBottom:"0%"}}><Order/></TabPanel>
                  <TabPanel><Login handleAuth={this.handleAuth}/></TabPanel>
                  <TabPanel><Register handleAuth={this.handleAuth}/></TabPanel>
              </Tabs>
            </div>
          </div>
        )}     
      </BrowserRouter>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    brand: state.brand,
    type: state.type
  }
}
export default connect(mapStateToProps)(App)