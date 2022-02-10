import * as mvie from "../actions/movie.actions";
import { State } from "../states/movie.state";

export const initialState: State = { 
    ids: [],
    movies: {},
    movieSelected: null
};

export const movieReducer = (state = initialState, action: mvie.Actions): State => {
    switch (action.type) {
        case mvie.ADDTOCART:
            //const movie = action.payload;
            return {
                ids: state.ids,
                movies: state.movies,
                movieSelected: action.payload
              };
    
        default:
            return state;
    }
}