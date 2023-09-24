import { Dispatch } from "react"
import { IUser, UserAction } from "../../types/redux/user"
import { userTypes } from "../types/user"
import axios from "axios"

const fetchUsersAction = ():UserAction => {
    return {
        type: userTypes.FETCH_USERS
    }
}

const fetchUsersSuccessAction = (payload: IUser[]):UserAction => {
    return {
        type: userTypes.FETCH_USERS_SUCCESS,
        payload
    }
}

const fetchUsersErrorAction = (payload: string): UserAction => {
    return {
        type:userTypes.FETCH_USERS_ERROR,
        payload
    }
}

export const asyncUsersAction = () => {
    return async (dispatch:Dispatch<UserAction>):Promise<void> => {
        try {
            dispatch(fetchUsersAction())
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            dispatch(fetchUsersSuccessAction(response.data))
        } catch (error) {
            dispatch(fetchUsersErrorAction('Не удалось загрузить пользователей'))
        }
    }
}