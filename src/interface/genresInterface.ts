interface IGenre{
    id: number;
    name: string;
}

interface IGenres{
    genres: IGenre[]
}

export type{
    IGenre,
    IGenres
}