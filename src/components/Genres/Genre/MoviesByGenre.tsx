import React, { useEffect, useState } from 'react';
import {useParams, useSearchParams} from 'react-router-dom';
import { axiosMoviesServices } from '../../../services/axiosMoviesServices';
import { IMovie } from '../../../interface/moviesinterface';
import {useAppDispatch, useAppSelector} from "../../../hooks/reduxHooks";
import {mainActions} from "../../../redux/slices/slice";

interface IResMovies {
    movies: IMovie[];
}

const MoviesByGenre: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [query, setQuery] = useSearchParams({ page: '1' });
    const page = query.get('page') || '1'!;
    const { movies, errors } = useAppSelector((state) => state.main);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(mainActions.getMovies({ page }));
    }, [dispatch, page]);

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
