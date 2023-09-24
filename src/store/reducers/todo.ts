import { TodoAction, TodoState } from "../../types/redux/todos";
import { todoTypes } from "../types";

const initialState:TodoState = {
    todos: [],
    loading: false,
    error: null,
    page: 1,
    limit: 10,
}


export const todoReducer = (state = initialState, action:TodoAction):TodoState => {

    switch(action.type) {

        case todoTypes.FETCH_TODO: {
            return {...state, loading: true}
        }

        case todoTypes.FETCH_TODO_SUCCESS: {
            return {...state, loading: false, todos: action.payload}
        }

        case todoTypes.FETCH_TODO_ERROR: {
            return {...state, loading: false, error: action.payload}
        }

        case todoTypes.SET_TODO_PAGE: {
            return {...state, loading: false, page: action.payload}
        }

        default: {
            return state
        }
    }

}