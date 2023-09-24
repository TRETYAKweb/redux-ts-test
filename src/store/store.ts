import {composeWithDevTools} from 'redux-devtools-extension'
import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';
import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch<AppDispatch>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type Action = { type: string; payload: unknown; error?: boolean };
export type AppSaga<ReturnType = void> = () => IterableIterator<ReturnType>;