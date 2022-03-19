import { combineReducers } from "redux"
import { authReducer } from "./authReducer"
import { navReducer } from "./navReducer"

export const rootReducer = combineReducers({
    auth: authReducer,
    navigation: navReducer
})

export type RootState = ReturnType<typeof rootReducer>