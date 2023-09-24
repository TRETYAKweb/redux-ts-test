import React, {useEffect} from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { asyncTodoAction, setTodoPageAction} from "../../store/actions";

export const TodoList:React.FC = () => {

    const pages:number[] = [1,2,3,4,5,6,7,8,9,10];

    const {todos, loading, error, page} = useAppSelector((state) => state.todo);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(asyncTodoAction(page))
    },[dispatch, page])

    if(loading) return <h1>Загрузка...</h1>
    if(error) return <h1>{error}</h1>

    return <div className="todo__inner">
        {todos?.map((todo) => <div key={todo.id}>{todo.id} --- {todo.title}</div>)}
        <hr />
        <div className="wrap">
            {pages.map(page => <div className="page" onClick={() => dispatch(setTodoPageAction(page))} key={page}>{page}</div>)}
        </div>
    </div>
}