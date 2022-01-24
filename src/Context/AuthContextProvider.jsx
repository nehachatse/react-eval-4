import React from "react";

export const AuthContext = React.createContext();

export const AuthContextProvider = ({children}) => {
    const [isAuth, setIsAuth] = React.useState(false);
    const handleIsAuth = ({userName, pass}) => {
        console.log("auth", isAuth);
        if(userName == "admin" && pass == "admin"){
            setIsAuth(!isAuth);
        }
    }

    const value = {isAuth, handleIsAuth};

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    )
}