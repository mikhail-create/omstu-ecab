import { history } from "../../_helpers/history"
import { AuthAction, AuthActionTypes, AuthState } from "../types/authTypes"

const initialState: AuthState = {
    userData: {
        name: "",
        email: null,
        roles: []
    },
    error: null,
    isSignedIn: false,
    token: null,
    isLoading: false
}

export const authReducer = (state = initialState, action: AuthAction): AuthState => {
    switch (action.type) {
        case AuthActionTypes.SIGN_IN_SUCCESS:
            localStorage.setItem('userName', action.payload.userData.name)
            localStorage.setItem('userRoles', action.payload.userData.roles[0])
            history.push("/news")
            window.location.reload();
            return {
                userData: {
                    name: action.payload.userData.name,
                    email: action.payload.userData.email,
                    roles: action.payload.userData.roles
                },
                isSignedIn: action.payload.isSignedIn,
                token: action.payload.token,
            }

        case AuthActionTypes.SIGN_IN_FAILED:
            return {
                ...initialState,
                error: action.payload
            }

        case AuthActionTypes.SIGN_UP_SUCCESS:
            return {
                userData: {
                    name: action.payload.userData.name,
                    email: action.payload.userData.email,
                    roles: action.payload.userData.roles
                },
                isSignedIn: action.payload.isSignedIn,
                token: action.payload.token,
            }

        case AuthActionTypes.SIGN_UP_FAILED:
            return {
                ...initialState,
                error: action.payload
            }

        case AuthActionTypes.SIGN_OUT:
            return {
                ...initialState
            }
        default:
            return state
    }
}