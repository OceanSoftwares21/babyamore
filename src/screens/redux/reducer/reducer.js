import { USER_DATA, PROFILE_PIC, CART_LENGTH } from '../action/action'
const initialState = {
    value: [],
    profilepic: [],
    cartlength: []
}
const reducerfunction = (state = initialState, action) => {
    // console.log(action ,'redu');
    switch (action.type) {
        case USER_DATA: {
            return { ...state, value: action.payload };
        }
        case PROFILE_PIC: {
            // console.log('reducer',action.payload);
            return { ...state, profilepic: action.payload };
        }
        case CART_LENGTH: {
            // console.log('reducer',action.payload);
            return { ...state, cartlength: action.payload };
        }
        default: {
            return state;
        }
    }
}
export default reducerfunction;   
