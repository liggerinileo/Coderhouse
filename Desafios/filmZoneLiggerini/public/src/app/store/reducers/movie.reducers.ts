import * as mvie from "../actions/movie.actions";
import { State } from "../states/movie.state";

export const initialState: State = {
    movieSelected: null
};

export const movieReducer = (state = initialState, action: mvie.Actions): State => {
    switch (action.type) {
        case mvie.ADDTOCART:
            return {
                movieSelected: action.payload
              };
    
        default:
            return state;
    }
}