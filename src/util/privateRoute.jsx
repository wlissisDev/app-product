import { useContext } from "react"
import { Context } from "../context/AuthContext"
import { Navigate, Route } from "react-router-dom"

export function PrivateRoute({ children }) {
    // const { auth } = useContext(Context)
    const authUser = JSON.parse(localStorage.getItem("authUser"));
    return authUser.auth ? children : <Navigate to="/login" replace
    />
}