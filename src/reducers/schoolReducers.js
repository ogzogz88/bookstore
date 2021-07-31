import {
    SCHOOL_LIST_REQUEST,
    SCHOOL_LIST_SUCCESS,
    SCHOOL_LIST_FAIL
} from "../constants/schoolConstants"

export const schoolListReducers = (state = { schools: [] }, action) => {
    switch (action.type) {
        case SCHOOL_LIST_REQUEST:
            return { loading: true, schools: [] }
        case SCHOOL_LIST_SUCCESS:
            return { loading: false, schools: action.payload }
        case SCHOOL_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}