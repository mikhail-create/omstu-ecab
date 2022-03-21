import { history } from "../../_helpers/history"
import { AuthAction, AuthActionTypes, AuthState } from "../types/authTypes"

const initialState: AuthState = {
    userData: {
        name: "",
        email: "",
        _id: ""
    },
    error: null,
    isSignedIn: false,
    token: null,
    isLoading: false
}

export const authReducer = (state = initialState, action: AuthAction): AuthState => {
    switch (action.type) {
        case AuthActionTypes.SIGN_IN_SUCCESS:
            localStorage.setItem('_id', action.payload.userData._id)
            history.push("/news")
            window.location.reload();
            return {
                userData: {
                    name: action.payload.userData.name,
                    email: action.payload.userData.email,
                    _id: action.payload.userData._id
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
            localStorage.setItem('_id', action.payload.userData._id)
            history.push("/news")
            window.location.reload();
            return {
                userData: {
                    name: action.payload.userData.name,
                    email: action.payload.userData.email,
                    _id: action.payload.userData._id
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