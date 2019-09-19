 
import React from 'react'
import {connect} from 'react-redux'
import {startResetUser} from '../../Redux/Action/userAction'

class Logout extends React.Component{
    
    componentDidMount(){
        this.props.dispatch(startResetUser())
        localStorage.removeItem('userAuthToken')
        this.props.history.push('/')
    }
    render(){
        return(
            <div className="alert alert-primary" role="alert">
                Loggin Out
            </div>
        )
    }
}
export default connect()(Logout)