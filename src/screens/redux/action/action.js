export const USER_DATA = "USER_DATA";
export const PROFILE_PIC = "PROFILE_PIC";
export const CART_LENGTH = "CART_LENGTH";
import Axios from "axios";
export const Userdata = (val) => {
    var data = JSON.parse(val)
    try {
        return async (dispatch) => {
            dispatch({ type: USER_DATA, payload: data })
        }
    } catch (err) {
        console.log(err);
    }
}

export const Userprofile = (v) => {
    return dispatch => {
        dispatch({ type: PROFILE_PIC, payload: v })
    }
}
export const cart = (i) => {
    return dispatch => {
        dispatch({ type: CART_LENGTH, payload: i })
    }
}