import React, { useEffect } from "react";
import { asyncUsersAction } from "../../store/actions/user";
import type {} from 'redux-thunk/extend-redux';
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store/store";

export const UserList:React.FC = () => {

    const {loading, error, users} = useAppSelector(state => state.user)
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(asyncUsersAction())
    }, [dispatch])


    if(loading) {
        return <h1>Загрузка...</h1>
    }

    if(error) {
        return <h1>{error}</h1>
    }

    return <div className="inner">
        {users?.map((it) => <div className="user" key={it.id}>{it.name}</div>)}
    </div>
}