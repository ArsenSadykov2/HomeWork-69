export interface IFilm {
    name: string;
    url: string;
    description: string;
}

export interface IFilmInput {
    name: string;
}

export interface IFilmAPI {
    [id: string]: IFilm[];
}
