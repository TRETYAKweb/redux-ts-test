import {todoTypes} from '../../store/types'

export interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export interface TodoState {
    todos: ITodo[],
    loading: boolean,
    error: null | string,
    page: number,
    limit: number,
}

interface fetchTodo {
    type: todoTypes.FETCH_TODO
}

interface fetchTodoSuccess {
    type: todoTypes.FETCH_TODO_SUCCESS,
    payload: ITodo[],
}

interface fetchTodoError {
    type: todoTypes.FETCH_TODO_ERROR,
    payload: string
} 

interface setTodoPage {
    type: todoTypes.SET_TODO_PAGE,
    payload: number
}

export type TodoAction = fetchTodo | fetchTodoSuccess | fetchTodoError | setTodoPage;