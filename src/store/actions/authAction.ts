import axios from "axios"
import { Dispatch } from "react"
import { authService } from "../../_services/auth.service"
import { AuthAction, AuthActionTypes } from "../types/authTypes"

export const signIn = (email: string, password: string) => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            const response = await authService.signIn(email, password)
            localStorage.setItem('access', response.access);
            localStorage.setItem('refresh', response.refresh);
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
            const response = await authService.signUp(name, email, password)
            localStorage.setItem('access', response.access);
            localStorage.setItem('refresh', response.refresh);
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

export const checkAuth = () => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            const refresh = localStorage.getItem('refresh')
            const response = await authService.refresh(refresh)
            localStorage.setItem('access', response.access);
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