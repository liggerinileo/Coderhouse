export interface Movie {
    name: string;
    image: string;
    description: string,
    duration: string,
    year: number,
    price: number,
    genre: string[],
    filmZoneCategory: string[],
    addedToCart: boolean,
    id: number;
}