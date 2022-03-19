import { NavState } from "../types/navTypes"

const initialState: NavState = {
    currentPage: 1
}

export const navReducer = (state = initialState, action: any): NavState => {
    switch (action.type) {
        case "SET_PAGE":
            return {
                ...initialState
            }
        default:
            return state
    }
}