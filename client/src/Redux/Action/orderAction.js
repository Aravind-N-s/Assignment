import axios from '../../Config/axios'

export const setOrder = (order) => {
    return { type: 'SET_ORDER', payload: order}
}

export const startSetOrder = () =>{
    return (dispatch) => {
        axios.get('/order',{
            headers:{
                'x-auth': localStorage.getItem('userAuthToken')
            }
        })
        .then(response => {
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.message)
            }
            else {
                dispatch(addOrder(response.data))
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export const addOrder = (order) => {
    return { type: 'ADD_ORDER', payload: order}
}

export const startAddOrder = (formData) =>{
    return (dispatch) => {
        axios.post('/order', formData)
        .then(response => {
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.message)
            }
            else {
                // this.props.history.push(`/contact/${response.data._id}`)
                dispatch(addOrder(response.data))
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export const editOrder = (order) => {
    return { type: 'EDIT_ORDER', payload: order}
}

export const startEditOrder = (formData) =>{
    return (dispatch) => {
        axios.put('/order/:id',formData,{
            headers:{
                'x-auth':localStorage.getItem('userAuthToken')
            }
        })
        .then(response => {
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.message)
            }
            else {
                // this.props.history.push(`/contact/${response.data._id}`)
                dispatch(editOrder(response.data))
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export const resetOrder = () => {
    return { type: 'RESET_ORDER'}
}

export const startResetOrder = () =>{
    return (dispatch) => {
        axios.delete('/order/:id',{
            headers:{
                'x-auth':localStorage.getItem('userAuthToken')
            }
        })
        .then(response => {
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.message)
            }
            else {
                // this.props.history.push(`/contact/${response.data._id}`)
                dispatch(resetOrder(response.data))
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }
}
