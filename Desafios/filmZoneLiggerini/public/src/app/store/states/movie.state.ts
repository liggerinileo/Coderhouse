import { Cart } from "src/app/models/Cart";

export interface State {
    ids: string[],
    movies: { [id: string]: Cart },
    movieSelected: Cart | null
}