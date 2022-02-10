import { Action } from '@ngrx/store';
import { Cart } from 'src/app/models/Cart';
import { State } from "../states/movie.state";

export const ADDTOCART: string = 'ADDTOCART';
export const addedtocart = ( state: State ) => {
    return {
        type: ADDTOCART,
        payload: state
    }
}

export class AddToCart implements Action {
    readonly type = ADDTOCART;
  
    constructor(public payload: Cart) { }
}

export type Actions
  = AddToCart;