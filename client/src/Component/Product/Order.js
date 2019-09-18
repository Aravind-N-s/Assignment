import React from 'react'
import {connect} from 'react-redux'

class Order extends React.Component {
    constructor(){
        super()
        this.state = { 
            name: '',
            email: '',
            phoneNo: '',
            units: 0.5,
            type: '',
            brand: [],   
            hasKids: false,
            note:''
        }
        this.handleUnits = this.handleUnits.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleHasKids = this.handleHasKids.bind(this)
    }
    handleChange(e){
        e.persist()
        this.setState(() => ({
            [e.target.name]: e.target.value
        }))
    }

    handleHasKids(e){
        // e.persist()
        this.setState((prevState) => ({hasKids: !prevState.hasKids}))
    }
    handleUnits(e){
        e.preventDefault()
        if(e.target.name == 'up'){
            this.setState((prevState) => ({
                units : prevState.units + 0.5
            }))
        }else{
            this.setState((prevState) => ({
                units : prevState.units - 0.5
            }))
        }
    }

    handleSubmit(e){
        e.preventDefault()
        const formData = {
            name: this.state.name,
            email: this.state.email,
            phoneNo: this.state.phoneNo,
            units: this.state.units,
            type: this.state.type,  
            hasKids: this.state.hasKids,
            note: this.state.note,
            brand: this.state.brand
        }
        this.props.handleSubmit(formData)
    }
    // componentDidMount() {
    //     console.log('oxygen')
    // }

    render() {
        console.log(this.state)
        //onChange={this.handleChange}
        return (
            <form> 
                <div className="form-row">
                    <div className="col">
                        <input className = "form-control" type="text" name="name" value={this.state.name}  onChange={this.handleChange} placeholder="Name"/>
                    </div>
                    <div className="col">
                        <input className = "form-control" type="text" name="email" value={this.state.email}  onChange={this.handleChange} placeholder="Email"/>
                    </div>
                </div>
                <label id = "input">
                    <input className = "form-control" type="number" name="phoneNo" value={this.state.phoneNo}  onChange={this.handleChange} placeholder="Phone Number"/>
                    <button onClick={this.handleUnits} name="down" disabled = {this.state.units == 0.5}>-</button>{this.state.units}<button onClick={this.handleUnits} name="up">+</button><br/>                  
                    Select1<br/>
                    Select2<br/>
                    <input className = "form-control" type="checkbox" checked = {this.state.hasKids == true} onChange={this.handleHasKids}/>Kids
                    <textarea rows="4" cols="50" className = "form-control" type="textarea" name="note" value={this.state.note}  onChange={this.handleChange} placeholder="Any Notes"/>                    
                </label><br/>      
            </form>
        )
    }
}

export default connect()(Order)
