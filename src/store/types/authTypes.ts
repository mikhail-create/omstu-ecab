export type AuthState = {
    userData: {
        name: string | null
        email: string | null
        roles: string[] | null
    }
    token: string | null
    isSignedIn: Boolean
    error?: string | null
    isLoading?: boolean
}

export enum AuthActionTypes {
    SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS',
    SIGN_IN_FAILED = 'SIGN_IN_FAILED',
    SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS',
    SIGN_UP_FAILED = 'SIGN_UP_FAILED',
    SIGN_OUT = 'SIGN_OUT',
    LOADING = 'LOADING'
}

type SignInSuccessAction = {
    type: AuthActionTypes.SIGN_IN_SUCCESS
    payload: AuthState
}

type SignInFailedAction = {
    type: AuthActionTypes.SIGN_IN_FAILED
    payload: string
}

type SignUpSuccessAction = {
    type: AuthActionTypes.SIGN_UP_SUCCESS
    payload: AuthState
}

type SignUpFailedAction = {
    type: AuthActionTypes.SIGN_UP_FAILED
    payload: string
}

type SignOutAction = {
    type: AuthActionTypes.SIGN_OUT
}

export type AuthAction = SignInSuccessAction | SignInFailedAction | SignUpSuccessAction | SignUpFailedAction | SignOutAction