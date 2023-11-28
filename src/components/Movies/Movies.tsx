
import React, { useEffect, useState } from 'react';
import { IMovie } from "../../interface/moviesinterface";
import { axiosMoviesServices } from "../../services/axiosMoviesServices";
import Movie from './Movie/Movie';
import css from './Movies.module.css';
import {useSearchParams} from "react-router-dom";

const Movies = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [query, setQuery] = useSearchParams({ page: '1' });
    const page = query.get('page') || '1'!;


    useEffect(() => {
        axiosMoviesServices.getAll(page).then(({ data }) => setMovies(data.results));
    }, [page]);

    return (
        <div className={css.movies}>
            <div className={css.movie}>
                {movies.map((movie) => (<Movie key={movie.id} movie={movie} />))}
            </div>

        </div>
    );
};

export { Movies };



