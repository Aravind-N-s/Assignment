const orderReducer = (state ={}, action) => {
    switch(action.type){
        case'SET_ORDER':{
            return {...action.payload}
        }
        case'ADD_ORDER':{
            return{...action.payload}
        }
        case'EDIT_USER':{
            return{...action.payload}
        }
        case'RESET_USER':{
            return {}
        }
        default:
            return {...state}
    }
} 

export default orderReducer