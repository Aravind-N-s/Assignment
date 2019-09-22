const brandReducer = (state =[], action) => {
    switch(action.type){
        case'SET_BRAND':{
            return [...action.payload]
        }
        case'ADD_BRAND':{
            return [...state,action.payload]
        }
        case'EDIT_BRAND':{
            return [...action.payload]
        }
        case 'REMOVE_BRAND':
            return state.filter(brand => brand._id !== action.payload)
        default:
            return [...state]
    }
}

export default brandReducer