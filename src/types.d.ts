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
    id: number;
    name: string;
    summary: string;
    image?: {
        medium: string;
    };
    genres: string[];
    status: string;
    premiered: string;
    rating: {
        average: number;
    };
}

export interface Show {
    show: {
        id: number;
        name: string;
        summary: string;
        image?: {
            medium: string;
        };
        genres: string[];
        status: string;
        premiered: string;
        rating: {
            average: number;
        };
    };
}
