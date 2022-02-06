import { ADDEDTOCART } from "../actions/cart.actions";

export const initialState = { addedToCart: false };

export const movieReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADDEDTOCART:
            return {...state, addedToCart: state.addedToCart + action.payload}
    
        default:
            return state;
    }
}