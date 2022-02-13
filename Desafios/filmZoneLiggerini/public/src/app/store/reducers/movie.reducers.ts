import * as mvie from "../actions/movie.actions";
import { State } from "../states/movie.state";

export const initialState: State = {
    movieSelected: null
};

export const movieReducer = (state = initialState, action: mvie.Actions): State => {
    switch (action.type) {
        case mvie.ADDTOCART:
            return {
                ...state,
                movieSelected: action.payload
            };

        case mvie.REMOVEFROMCART:
            return {
                ...state,
                movieSelected: action.payload
            };

        case mvie.RENTED:
            return {
                ...state,
                movieSelected: action.payload
            };

        case mvie.RETURNED:
            return {
                ...state,
                movieSelected: action.payload
            };
    
        default:
            return state;
    }
}