import { useReducer } from "react"
//import {type State, type Action} from "../interfaces/Reducer.ts"
export const initialState = { state: null }

type ACTIONTYPE =
    | { type: "USER"; payload: any }
    | { type: "CLEAR"; payload: any }
    | { type: "UPDATE"; payload: any }

export type UserContextType = { state: any, dispatch: any }

export function reducer(state: typeof initialState, action: ACTIONTYPE) {
    switch (action.type) {
        case "USER":
            return action.payload;
        case "CLEAR":
            return action.payload;
        case "UPDATE":
            return {
                ...state,
                followers: action.payload.followers,
                following: action.payload.following
            };
        default:
            return state
    }

}