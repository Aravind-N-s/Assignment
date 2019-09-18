 
import React from 'react'
import {connect} from 'react-redux'
import {startResetContact} from '../../Redux/Action/userAction'

class Logout extends React.Component{
    
    componentDidMount(){
        this.props.dispatch(startResetContact())
    }
    render(){
        return(
            <div><p>logging out..</p></div>
        )
    }
}
export default connect()(Logout)