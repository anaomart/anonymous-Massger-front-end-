import React from 'react'
import useAuthContext from './useAuthContext';

export default function useLogout() {
    const {dispatch} = useAuthContext();
    
    function logout() {
        console.log('Logout out')
        localStorage.removeItem('user')
        dispatch({type:"LOGOUT"})
    }
  return {
    logout
  }
}
