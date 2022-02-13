import { InjectionToken } from "@angular/core";
import { movieReducer } from "../reducers/movie.reducers";
import { createStore, applyMiddleware  } from "redux";
import ReduxThunk from 'redux-thunk';

const middlewares = [ReduxThunk];

export function createMovieStore() {
    return createStore(movieReducer, applyMiddleware(...middlewares));
}

export const MovieStore = new InjectionToken('cart.store');
export const movieStoreProviders = [
    {provide: MovieStore, useFactory: createMovieStore}
]