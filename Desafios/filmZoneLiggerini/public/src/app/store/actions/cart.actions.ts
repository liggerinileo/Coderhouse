export const ADDEDTOCART: string = 'ADDEDTOCART';
export const addedtocart = ( added: boolean ) => {
    return {
        type: ADDEDTOCART,
        payload: added
    }
}