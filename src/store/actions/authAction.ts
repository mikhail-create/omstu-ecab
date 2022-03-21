import axios from "axios"
import { Dispatch } from "react"
import { authService } from "../../_services/auth.service"
import { AuthAction, AuthActionTypes } from "../types/authTypes"

export const signIn = (email: string, password: string) => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            const response = await authService.login(email, password)  
            console.log(response);
            localStorage.setItem('token', response.token.token);
            dispatch({
                type: AuthActionTypes.SIGN_IN_SUCCESS,
                payload: {
                    ...response,
                    isSignedIn: true
                }
            })
        }
        catch (error) {            
            dispatch({
                type: AuthActionTypes.SIGN_IN_FAILED,
                payload: String(error)
            })
        }
    }
}

export const signUp = (name: string, email: string, password: string) => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            const response = await authService.registration(name, email, password)  
            localStorage.setItem('token', response.token.token);
            dispatch({
                type: AuthActionTypes.SIGN_UP_SUCCESS,
                payload: {
                    ...response,
                    isSignedIn: true
                }
            })
        }
        catch (error) {            
            dispatch({
                type: AuthActionTypes.SIGN_UP_FAILED,
                payload: String(error)
            })
        }
    }
}

export const signOut = () => {
    return async (dispatch: Dispatch<AuthAction>) => {
        authService.logout()
        dispatch({
            type: AuthActionTypes.SIGN_OUT
        })
    }
}