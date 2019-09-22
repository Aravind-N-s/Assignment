import React from 'react'
import {connect} from 'react-redux'
import {startAddBrand} from '../../Redux/Action/brandAction'

class BrandDetails extends React.Component{
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
        this.props.dispatch(startAddBrand(formData))
    }

    render(props){
        console.log(this.props.brand)
        return(
            <div>
            <form>
                <label>
                    <span>Brand Name</span><br/>
                    <input type="text" placeholder="Brand Name" value={this.state.name} onChange={this.handleChange} name="name" />
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
export default connect(mapStateToProps)(BrandDetails)