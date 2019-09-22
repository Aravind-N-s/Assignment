const typeReducer = (state =[], action) => {
    switch(action.type){
        case'SET_TYPE':{
            return [...action.payload]
        }
        case'ADD_TYPE':{
            return [...state,action.payload]
        }
        case'EDIT_TYPE':{
            return [...action.payload]
        }
        case 'REMOVE_TYPE':
            return state.filter(type => type._id !== action.payload)
        default:
            return [...state]
    }
} 

export default typeReducer