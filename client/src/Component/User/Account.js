import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class Account extends React.Component{
    render(){
        return(
            <div>
                <h3>User Account</h3>
                <h4>{this.props.user.username}</h4>
               <Link to="/users/logout">Logout</Link> 
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user : state.user
    }
}

// export default Account
export default connect(mapStateToProps)(Account)