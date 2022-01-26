export interface Cart {
    name: string | undefined,
    image: string | undefined,
    description: string | undefined,
    duration: string | undefined,
    year: number | undefined,
    price: number | undefined,
    genre: string[] | undefined,
    filmZoneCategory: string[] | undefined,
    addedToCart: boolean | undefined,
    id: number | undefined,
    returnDate?: string,
    rented?: boolean,
    client?: string,
}