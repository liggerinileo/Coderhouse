import { Action } from '@ngrx/store';
import { Cart } from 'src/app/models/Cart';

export const ADDTOCART: string = 'ADDTOCART';
export const addedtocart = ( movie: Cart ) => {
    return {
        type: ADDTOCART,
        payload: movie
    }
}

export class AddToCart implements Action {
    readonly type = ADDTOCART;
  
    constructor(public payload: Cart) { }
}

export type Actions
  = AddToCart;