import { Studio } from "./studio";
import { Genre } from "./genre";

export interface Movie {
    id?: number
    GenreId: number
    StudioId: number
    name:string
    yearReleased:number
    Genre? : Genre
    Studio? : Studio
}
