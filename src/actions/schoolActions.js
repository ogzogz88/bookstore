import {
    SCHOOL_LIST_REQUEST,
    SCHOOL_LIST_SUCCESS,
    SCHOOL_LIST_FAIL
} from "../constants/schoolConstants"
import axios from "axios"


export const listSchools = () => async (dispatch) => {
    try {

        dispatch({ type: SCHOOL_LIST_REQUEST });
        const { data } = await axios.get("https://nubidus.com/api/schools");
        dispatch({
            type: SCHOOL_LIST_SUCCESS,
            payload: data
        });

    }
    catch (error) {
        dispatch({
            type: SCHOOL_LIST_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}