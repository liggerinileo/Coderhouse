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

export const RENTED: string = 'RENTED';
export const rented = ( state: {}) => {
    return {
        type: RENTED,
        payload: state
    }
}

export class Rented implements Action {
    readonly type = RENTED;
  
    constructor(public payload: Cart) { }
}

export const RETURNED: string = 'RETURNED';
export const returned = ( state: {}) => {
    return {
        type: RENTED,
        payload: state
    }
}

export class Returned implements Action {
    readonly type = RETURNED;
  
    constructor(public payload: Cart) { }
}


export type Actions
  = AddToCart | RemoveFromCart | Rented | Returned;