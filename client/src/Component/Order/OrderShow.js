import React from "react";
import {connect} from 'react-redux'
//order details
const OrderShow = (props) => {
    console.log(props.order)
    return(
        <div>
            {props.order &&(
                <ul>
                    {props.order.map((orders) => {
                    return <li key={orders._id}>
                        {orders.name}<br/>
                        {orders.email}<br/>
                        {orders.phoneNo}<br/>
                        {orders.brand &&(
                            orders.brand.map((or) =>{
                                return (or.name)
                            })
                        )}<br/>
                        {orders.type &&(
                            orders.type.map((or) =>{
                                return (or.name)
                            })
                        )}<br/>
                        {orders.units}<br/>
                        {orders.hasKids}<br/>
                        {orders.delivery}<br/>
                        {orders.note}<br/>
                    </li>
                })}
                </ul>           //darksky api can be used here to create maps
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        order: state.order
    }
}
export default connect(mapStateToProps)(OrderShow)
