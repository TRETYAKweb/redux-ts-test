import { combineReducers } from "redux";
import {userReducer as user} from './user';
import {todoReducer as todo} from './todo';

export const rootReducer = combineReducers({
    user,
    todo
})

// export type RootState = ReturnType<typeof rootReducer>

