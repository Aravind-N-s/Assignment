import axios from '../../Config/axios'

export const setType = (type) => {
    return { type: 'SET_TYPE', payload: type}
}

export const startSetType = () =>{
    return (dispatch) => {
        axios.get('/type')
        .then(response => {
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.message)
            }
            else {
                dispatch(setType(response.data))
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export const addType = (type) => {
    return { type: 'ADD_TYPE', payload: type}
}

export const startAddType = (formData) =>{
    return (dispatch) => {
        axios.post('/type', formData,{
            headers:{
                'x-auth': localStorage.getItem('userAuthToken')
            }
        })
        .then(response => {
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.message)
            }
            else {
                dispatch(addType(response.data))
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export const editType = (type) => {
    return { type: 'EDIT_TYPE', payload:type}
}

export const startEditType = (formData) =>{
    return (dispatch) => {
        axios.put('/type/:id',formData,{
            headers:{
                'x-auth':localStorage.getItem('userAuthToken')
            }
        })
        .then(response => {
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.message)
            }
            else {
                dispatch(editType(response.data))
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export const resetType = () => {
    return { type: 'RESET_TYPE'}
}

export const startResetType = () =>{
    return (dispatch) => {
        axios.delete('/type/:id',{
            headers:{
                'x-auth':localStorage.getItem('userAuthToken')
            }
        })
        .then(response => {
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.message)
            }
            else {
                dispatch(resetType(response.data))
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }
}


