export type AuthState = {
    userData: {
        name: string
        email: string
        _id: string
        group: string
    }
    isSignedIn: Boolean
    error?: string | null
    isLoading?: boolean
}

export enum AuthActionTypes {
    SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS',
    SIGN_IN_FAILED = 'SIGN_IN_FAILED',
    SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS',
    SIGN_UP_FAILED = 'SIGN_UP_FAILED',
    REFRESH_SUCCESS = 'REFRESH_SUCCESS',
    REFRESH_FAILED = 'REFRESH_SUCCESS',
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

type RefreshSuccess = {
    type: AuthActionTypes.REFRESH_SUCCESS
    payload: AuthState
}

type RefreshFailed = {
    type: AuthActionTypes.REFRESH_FAILED
    payload: string
}

export type AuthAction = SignInSuccessAction | SignInFailedAction | SignUpSuccessAction | SignUpFailedAction | SignOutAction | RefreshFailed | RefreshSuccess