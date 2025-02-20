import { createContext, useContext, useState } from "react";



const AuthContext = createContext()

import React from 'react'

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('')
    const [auth ,setAuth]=useState(false)

    const login = (userData) => {
        setUser(userData)
    }
    const isAuth =(auth)=>{
        setAuth(auth)
    }

    const logOut = () => {
        setUser(null)
    }
    return (
        <AuthContext.Provider value={{ user, login, logOut ,isAuth ,auth }}>{children}</AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}

