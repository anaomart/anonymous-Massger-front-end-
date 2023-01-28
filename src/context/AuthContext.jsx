import React, { createContext, useReducer } from 'react';

export  const AuthContext = createContext()

export const authReducer = (state, action)=>{
    console.log(action)
    switch (action.type) {
        case 'LOGIN' : 
            return {user:action.payload}
        case 'LOGOUT' :
            return {user: null}
        default:
            return state;
    }    
}

export const AuthContextProvider =({children}) => {

    const user = JSON.parse(localStorage.getItem('user'))  || null ;
    const [state , dispatch] = useReducer(authReducer , {user})

    return (
        <AuthContext.Provider value={{...state,dispatch}}>
            {children}
        </AuthContext.Provider>
    )

}


