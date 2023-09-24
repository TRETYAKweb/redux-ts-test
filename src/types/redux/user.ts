import { userTypes } from "../../store/types";

export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  }

export interface IUserState {
    users: IUser[],
    loading: boolean,
    error: null | string
}

interface IFetchUsersAction {
    type: userTypes.FETCH_USERS
}

interface IFetchUsersSuccessAction {
    type: userTypes.FETCH_USERS_SUCCESS
    payload: IUser[]
}


interface IFetchUsersErrorAction {
    type: userTypes.FETCH_USERS_ERROR
    payload: string
}

export type UserAction = IFetchUsersAction | IFetchUsersSuccessAction | IFetchUsersErrorAction;

