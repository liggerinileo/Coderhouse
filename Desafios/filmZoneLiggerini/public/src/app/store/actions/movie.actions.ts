import { Action } from '@ngrx/store';
import { Cart } from 'src/app/models/Cart';
import { Movie } from 'src/app/models/Movie';

/********** ADDTOCART ************/
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

/********** REMOVEFROMCART ************/
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

/********** RENTED ************/
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

/********** RETURNED ************/
export const RETURNED: string = 'RETURNED';
export const returned = ( state: {}) => {
    return {
        type: RETURNED,
        payload: state
    }
}

export class Returned implements Action {
    readonly type = RETURNED;
  
    constructor(public payload: Cart) { }
}

/********** CREATED ************/
export const CREATED: string = 'CREATED';
export const created = ( state: {}) => {
    return {
        type: CREATED,
        payload: state
    }
}

export class Created implements Action {
    readonly type = CREATED;
  
    constructor(public payload: Movie) { }
}

/********** DELETED ************/
export const DELETED: string = 'DELETED';
export const deleted = ( state: {}) => {
    return {
        type: DELETED,
        payload: state
    }
}

export class Deleted implements Action {
    readonly type = DELETED;
  
    constructor(public payload: Movie) { }
}

/********** EDITED ************/
export const EDITED: string = 'EDITED';
export const edited = ( state: {}) => {
    return {
        type: EDITED,
        payload: state
    }
}

export class Edited implements Action {
    readonly type = EDITED;
  
    constructor(public payload: Movie) { }
}


export type Actions
  = AddToCart | RemoveFromCart | Rented | Returned | Created | Deleted | Edited;