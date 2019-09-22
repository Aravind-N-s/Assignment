import React from 'react'
import {connect} from 'react-redux'
import {startAddType} from '../../Redux/Action/typeAction'

class TypeDetails extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        e.persist()
        this.setState(() => ({
            [e.target.name]: e.target.value
        }))
    }

    handleSubmit(e){
        e.preventDefault()
        const formData = {
            name: this.state.name
        }        
        this.props.dispatch(startAddType(formData))
    }

    render(props){
        console.log(this.props.brand)
        return(
            <div>
            <form>
                <label>
                    <span>Type Name</span><br/>
                    <input type="text" placeholder="Type Name" value={this.state.name} onChange={this.handleChange} name="name" />
                    <button onClick={this.handleSubmit}>Submit</button>
                </label>
            </form>
        </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user,
        type : state.type,
        brand: state.brand
      }
}
export default connect(mapStateToProps)(TypeDetails)