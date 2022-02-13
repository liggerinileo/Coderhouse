import { Action } from '@ngrx/store';
import { Cart } from 'src/app/models/Cart';

export const ADDTOCART: string = 'ADDTOCART';
export const addedtocart = ( state: {}) => {
    return {
        type: ADDTOCART,
        payload: state
    }
}

export class AddToCart implements Action {
    readonly type = ADDTOCART;
  
    constructor(public payload: Cart) { }
}

export const REMOVEFROMCART: string = 'REMOVEFROMCART';
export const removedfromcart = ( state: {}) => {
    return {
        type: REMOVEFROMCART,
        payload: state
    }
}

export class RemoveFromCart implements Action {
    readonly type = REMOVEFROMCART;
  
    constructor(public payload: Cart) { }
}

export type Actions
  = AddToCart | RemoveFromCart;