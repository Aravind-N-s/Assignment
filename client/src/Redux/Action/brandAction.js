import axios from '../../Config/axios'

export const setBrand = (brand) => {
    return { type: 'SET_BRAND', payload: brand}
}

export const startSetBrand = () =>{
    return (dispatch) => {
        axios.get('/brands')
        .then(response => {
            dispatch(setBrand(response.data))
        })
    }
}

export const addBrand = (brand) => {
    return { type: 'ADD_BRAND', payload: brand}
}

export const startAddBrand = (formData) =>{
    return (dispatch) => {
        axios.post('/brands', formData,{
            headers:{
                'x-auth': localStorage.getItem('userAuthToken')
            }
        })
        .then(response => {
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.message)
            }
            else {
                dispatch(addBrand(response.data))
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export const editBrand = (brand) => {
    return { type: 'EDIT_BRAND', payload: brand}
}

export const startEditBrand = (formData) =>{
    return (dispatch) => {
        axios.put('/brands/:id',formData,{
            headers:{
                'x-auth':localStorage.getItem('userAuthToken')
            }
        })
        .then(response => {
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.message)
            }
            else {
                dispatch(editBrand(response.data))
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export const resetBrand = () => {
    return { type: 'RESET_BRAND'}
}

export const startResetBrand = () =>{
    return (dispatch) => {
        axios.delete('/brands/:id',{
            headers:{
                'x-auth':localStorage.getItem('userAuthToken')
            }
        })
        .then(response => {
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.message)
            }
            else {
                dispatch(resetBrand(response.data))
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }
}


