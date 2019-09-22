import React from 'react'
import Select from 'react-select'
import {connect} from 'react-redux'
import {startAddOrder} from '../../Redux/Action/orderAction'

class OrderNew extends React.Component {
    constructor(){
        super()
        this.state = { 
            name: '',
            email: '',
            phoneNo: '',
            units: 0.5,
            latitude: '',
            longitude: '',
            brand: [], 
            type: '', 
            hasKids: false,
            note:'',
            order: false
        }
        this.handleUnits = this.handleUnits.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleHasKids = this.handleHasKids.bind(this)
        this.handleLocation = this.handleLocation.bind(this)
        this.handleSelect = this.handleSelect.bind(this)
    }
    handleChange(e){
        e.persist()
        this.setState(() => ({
            [e.target.name]: e.target.value
        }))
    }

    handleSelect(e){
        const select = e
        select.map((sel) => {
            this.setState(() => ({
                [sel.name] : sel.value
            }))
        })
    }

    handleHasKids(e){
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
            location: {latitude: this.state.latitude,longitude: this.state.longitude},
            brand: this.state.brand
        }
        this.props.dispatch(startAddOrder(formData))
    }
    
    handleLocation(e){
        e.preventDefault()
        let success = (pos) => {
            var crd = pos.coords;
            this.setState(() => ({
                latitude: crd.latitude,
                longitude: crd.longitude
            }))
        }
        navigator.geolocation.getCurrentPosition(success)
        
    }
    render() {    
        console.log(this.state)  
        return (
            <form id = "form">
                <label id = "input">
                    <input  className = "xs-4 form-control" type="text" name="name" value={this.state.name}  onChange={this.handleChange} placeholder="Name"/>
                    <input  className = "xs-4 form-control" type="text" name="email" value={this.state.email}  onChange={this.handleChange} placeholder="Email"/>
                    <input  className = "xs-4 form-control" type="number" name="phoneNo" value={this.state.phoneNo}  onChange={this.handleChange} placeholder="Phone Number"/>
                </label>
                <button id = "input" onClick={this.handleUnits} name="down" disabled = {this.state.units == 0.5}>-</button>{this.state.units}<button id = "input" onClick={this.handleUnits} name="up">+</button><br/>                  
                <Select
                    isMulti="true" placeholder = 'Brand' isSearchable = "true" isClearable = {true} 
                    onChange={this.handleSelect}
                    options={
                        this.props.brand && (
                            this.props.brand.map((brands) => {
                                return {
                                    value : brands._id,
                                    label : brands.name,
                                    name : 'brand'
                                }
                            })
                        )
                    }/>
                <Select
                    isMulti = "true" placeholder = 'Type' isSearchable = "true" isClearable = "true" closeMenuOnSelect={false}
                    onChange={this.handleSelect}
                    options={
                        this.props.type && (
                            this.props.type.map((types) => {
                                return {
                                    value : types._id,
                                    label : types.name,
                                    name : 'type'
                                }
                            })
                        )
                    }/>
                <input id = "input" className = "form-control" type="checkbox" checked = {this.state.hasKids == true} onChange={this.handleHasKids}/>Kids <br/>
                <textarea id = "input" rows="4" cols="50" className = "form-control" type="textarea" name="note" value={this.state.note}  onChange={this.handleChange} placeholder="Any Notes"/><br/>                  
                <button onClick={this.handleLocation}>Locate Me</button><br/>
                <button onClick={this.handleSubmit}>Submit</button><br/>
            </form>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        brand : state.brand,
        type: state.type
      }
}
export default connect(mapStateToProps)(OrderNew)
