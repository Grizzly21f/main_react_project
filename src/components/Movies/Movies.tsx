import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { mainActions } from '../../redux/slices/slice';
import Movie from './Movie/Movie';
import css from './Movies.module.css';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
    const [query, setQuery] = useSearchParams({ page: '1' });
    const page = query.get('page') || '1';
    const { movies, errors } = useAppSelector((state) => state.main);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(mainActions.getMovies({ page }));
    }, [dispatch, page]);

    return (
        <div className={css.movies}>
            <div className={css.movie}>
                {movies.map((movie) => (
                    <Movie key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export { Movies };
