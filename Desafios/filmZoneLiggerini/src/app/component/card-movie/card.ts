export interface Card {
    id: any;
    image: string;
    name: string;
    description: string,
    duration: string,
    year: number,
    price: number,
    genre: string[],
    filmZoneCategory: string[],
    addedToCart: boolean
}