import { createContext, useState } from "react";

export const Context = createContext({});

export function ContextProvider({ children }) {
    const [auth, setAuth] = useState();

    function SignIn(username, password) {
        if (username == "admin" && password == "admin") {
            setAuth(true);
            localStorage.setItem("authUser", JSON.stringify({ auth:true }));
        }
        else{
            localStorage.removeItem("authUser")
            alert("usuário ou senha incorreto")
        }
    }
    function Logout(username, password) {
        localStorage.removeItem("authUser")
        setAuth(false);
    }

    return (
        <Context.Provider value={{ SignIn,Logout,auth }}>
            {children}
        </Context.Provider>
    )
}