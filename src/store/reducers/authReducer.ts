import { history } from "../../_helpers/history"
import { AuthAction, AuthActionTypes, AuthState } from "../types/authTypes"

const initialState: AuthState = {
    userData: {
        name: "",
        email: "",
        _id: "",
        group: ""
    },
    error: null,
    isSignedIn: false,
    isLoading: false
}

export const authReducer = (state = initialState, action: AuthAction): AuthState => {
    switch (action.type) {
        case AuthActionTypes.SIGN_IN_SUCCESS:
            localStorage.setItem('email', action.payload.userData.email)
            console.log(action.payload);
            
            return {
                userData: {
                    name: action.payload.userData.name,
                    email: action.payload.userData.email,
                    group: action.payload.userData.group,
                    _id: action.payload.userData._id
                },
                isSignedIn: action.payload.isSignedIn,
            }

        case AuthActionTypes.SIGN_IN_FAILED:
            return {
                ...initialState,
                error: action.payload
            }

        case AuthActionTypes.SIGN_UP_SUCCESS:
            localStorage.setItem('email', action.payload.userData.email)
            return {
                userData: {
                    name: action.payload.userData.name,
                    email: action.payload.userData.email,
                    group: action.payload.userData.group,
                    _id: action.payload.userData._id
                },
                isSignedIn: action.payload.isSignedIn,
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