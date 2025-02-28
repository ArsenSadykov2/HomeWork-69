export interface IFilm {
    name: string;
    url: string;
    description: string;
}

export interface IFilmList extends IFilm{
   id: string;
   items: IFilm;
}

export interface IFilmAPI {
    [id: string]: IFilm[];
}

export interface Show {
    show: {
        id: number;
        name: string;
        url: string;
    };
}
