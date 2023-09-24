import { IUserState, UserAction } from "../../types/redux/user"
import { userTypes } from "../types/user"

const initialState:IUserState = {
    users: [],
    loading: false,
    error: null,
}

export const userReducer = (state = initialState, action:UserAction):IUserState => {

    switch(action.type) {

        case userTypes.FETCH_USERS: {
            return {...state, loading: true, error: null, users: []}
        }

        case userTypes.FETCH_USERS_SUCCESS: {
            return {...state, loading: false, error: null, users: action.payload}
        }

        case userTypes.FETCH_USERS_ERROR: {
            return {...state, loading: false, error: action.payload, users: []}
        }


        default: {
            return state
        }

    }

}