import React, { useEffect, useState } from 'react';
import {useParams, useSearchParams} from 'react-router-dom';
import { axiosMoviesServices } from '../../../services/axiosMoviesServices';
import { IMovie } from '../../../interface/moviesinterface';

interface IResMovies {
    movies: IMovie[];
}

const MoviesByGenre: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [query, setQuery] = useSearchParams({ page: '1' });
    const page = query.get('page') || '1'!;

    useEffect(() => {
        axiosMoviesServices.getAll(page).then(({ data }) => setMovies(data.results));
    }, [page]);

    return (
        <div>
            <h2>Movies in selected genre:</h2>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>{movie.title}</li>
                ))}
            </ul>
        </div>
    );
};

export { MoviesByGenre };
