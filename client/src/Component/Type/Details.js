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

    //this function is called when inputs are given to the form.
    handleChange(e){
        e.persist()
        this.setState(() => ({
            [e.target.name]: e.target.value //the target value is used to set the state value
        }))
    }

    //this function is called on the clcik of the submit button, the state value is collected as the form data and sent to the redux action
    handleSubmit(e){
        e.preventDefault()
        const formData = {
            name: this.state.name
        }        
        this.props.dispatch(startAddType(formData))
    }

    //form of type and type details are located here
    render(props){
        return(//this returns the type name and form to add type.
            <div>
                {this.props.type &&(
                    this.props.type.map((types) => {
                        return (<h4>{types.name}</h4>)
                    })
                )}
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