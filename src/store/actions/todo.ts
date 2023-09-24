import { Dispatch } from "redux";
import { ITodo, TodoAction } from "../../types/redux/todos";
import { todoTypes } from "../types";
import axios from "axios";

const fetchTodoAction = ():TodoAction => ({type: todoTypes.FETCH_TODO});
const fetchTodoSuccessAction = (payload:ITodo[]):TodoAction => ({type: todoTypes.FETCH_TODO_SUCCESS, payload});
const fetchTodoErrorAction = (payload:string):TodoAction => ({type: todoTypes.FETCH_TODO_ERROR, payload});

export const setTodoPageAction = ( payload: number ):TodoAction => ({type: todoTypes.SET_TODO_PAGE, payload});

export const asyncTodoAction = (page = 1, limit = 10) => {
    return async (dispatch:Dispatch<TodoAction>):Promise<void> => {
        try {
            dispatch(fetchTodoAction());
            const response = await axios('https://jsonplaceholder.typicode.com/todos', {
                params: {_page: page, _limit: limit}
            })
            dispatch(fetchTodoSuccessAction(response.data))
        } catch (error) {
            dispatch(fetchTodoErrorAction('не удалось загрузить задачи!'))
        }

    }
}