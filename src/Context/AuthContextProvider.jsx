import React from "react";

export const AuthContext = React.createContext();

export const AuthContextProvider = ({children}) => {
    const [isAuth, setIsAuth] = React.useState(false);
    const handleIsAuth = ({userName, pass}) => {
        console.log("auth", isAuth);
        if(userName == "admin" && pass == "admin"){
            setIsAuth(!isAuth);
        }
        else{
            alert("Invalid User!!!")
        }
    }

    const value = {isAuth, handleIsAuth, setIsAuth};

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    )
}