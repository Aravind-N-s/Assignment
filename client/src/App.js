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

class App extends React.Component {
  render(){
    return (
      <BrowserRouter>
          {!_.isEmpty(this.props.user)?(
            <div>
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
              <img id="img" alt="loginImg" src="/1.jpg"/>
              <Tabs id="tabs">
                  <TabList>
                      <Tab>Login</Tab>
                      <Tab>Register</Tab>
                  </TabList>
                  <TabPanel className={{marginBottom:"0%"}}><Login handleAuth={this.handleAuth}/></TabPanel>
                  <TabPanel><Register handleAuth={this.handleAuth}/></TabPanel>
              </Tabs>
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

export default connect(mapStateToProps)(App)