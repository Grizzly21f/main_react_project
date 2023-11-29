//
// import React, { useEffect, useState } from 'react';
// import { IMovie } from "../../interface/moviesinterface";
// import { axiosMoviesServices } from "../../services/axiosMoviesServices";
// import Movie from './Movie/Movie';
// import css from './Movies.module.css';
// import {useSearchParams} from "react-router-dom";
// import {useDispatch, useSelector} from "react-redux";
//
// const Movies = () => {
//     const [movies, setMovies] = useState<IMovie[]>([]);
//     const [query, setQuery] = useSearchParams({ page: '1' });
//     const page = query.get('page') || '1'!;
//
//     useEffect(() => {
//         axiosMoviesServices.getAll(page).then(({ data }) => setMovies(data.results));
//     }, [page]);
//
//     return (
//         <div className={css.movies}>
//             <div className={css.movie}>
//                 {movies.map((movie) => (<Movie key={movie.id} movie={movie} />))}
//             </div>
//
//         </div>
//     );
// };
//
// export { Movies };



// Movies.tsx
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'; // Adjust the path
import { mainActions } from '../../redux/slices/slice'; // Adjust the path
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
