import {createContext, useReducer} from 'react';
import AuthReducer from './AuthReducer';

const INITIAL_STATE={
    user:{
        _id:"62454687467fc84aebdecdb0",
    username
    :
    "john",
    email
    :
    "john@gmail.com",
    password
    :
    "123456789",
    profilePicture
    :
    "assets/person/1.jpg",
    coverPicture
    :
    "assets/feeds/7.jpg",
    followers
    :
    [],
    following
    :
    [],
    isAdmin
    :
    false,
    city
    :
    "New York",
    from
    :
    "Madrid",
    },
    error:false,
    isFetching:false
}

export const AuthContext=createContext(INITIAL_STATE);

export const AuthContextProvider=({children})=>{
    const [state,dispatch]=useReducer(AuthReducer,INITIAL_STATE)
    return (
        <AuthContext.Provider 
        value={{
            user:state.user,
            isFetching:state.isFetching,
            error:state.error,
            dispatch
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}