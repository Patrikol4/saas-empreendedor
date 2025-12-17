//import {type State, type Action} from "../interfaces/Reducer.ts"
export const initialState = false

export type UserContextType = {state: any, dispatch: any}

export const reducer = (state: any, action: any)=> {
    if(action.type=="USER"){
        return action.payload
    }
    if(action.type=="CLEAR"){
        return console.log("Payload empty")
    }
    if(action.type=="UPDATE"){
        return {
            ...state,
            followers: action.payload.followers,
            following: action.payload.following,
            
        }
    }
  
    return state
}