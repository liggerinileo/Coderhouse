import { InjectionToken } from "@angular/core";
import { movieReducer } from "../reducers/movie.reducers";
import { createStore } from "redux";

export function createCartStore() {
    return createStore(movieReducer);
}

export const MovieStore = new InjectionToken('cart.store');
export const movieStoreProviders = [
    {provide: MovieStore, useFactory: createCartStore}
]