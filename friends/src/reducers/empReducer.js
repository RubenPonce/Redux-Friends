//import the actions
//set the initial state
//code the logic in a switch statement for each action type
import {FETCH_EMP, LOGIN_FAILURE, LOGIN_SUCCESS} from '../actions'
const initialState = {
    employees: [],
    isLogginIn: false,
    error: '',
}

export const empReducer = (state=initialState, action) =>{
    console.log(action)
    console.log(state)
    switch(action.type){
        case FETCH_EMP:
        return {
            ...state,
            isLoggedIn: true,
            employees: action.payload
           

        }
        case LOGIN_SUCCESS: 
        console.log(action.payload)
        return {
            ...state,
            isLoggedIn: false,
            employees: action.payload
           
        }
        case LOGIN_FAILURE:
        return{
            ...state,
            isLoggedIn: false,
            
        }
        default: 
        return{
            state
        }


    }
}