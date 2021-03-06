import axios from '../../Config/axios'

export const setOrder = (order) => {
    return { type: 'SET_ORDER', payload: order}
}

export const startSetOrder = () =>{
    return (dispatch) => {
        axios.get('/orders',{
            headers:{
                'x-auth': localStorage.getItem('userAuthToken')
            }
        })
        .then(response => {
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.message)
            }
            else {
                dispatch(setOrder(response.data))
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
        axios.post('/orders', formData)
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

export const editOrder = (order) => {
    return { type: 'EDIT_ORDER', payload: order}
}

export const startEditOrder = (formData) =>{
    return (dispatch) => {
        axios.put('/orders/:id',formData,{
            headers:{
                'x-auth':localStorage.getItem('userAuthToken')
            }
        })
        .then(response => {
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.message)
            }
            else {
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
        axios.delete('/orders/:id',{
            headers:{
                'x-auth':localStorage.getItem('userAuthToken')
            }
        })
        .then(response => {
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.message)
            }
            else {
                dispatch(resetOrder(response.data))
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }
}


