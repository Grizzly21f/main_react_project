import React, { useEffect} from 'react';
import Genre from './Genre/Genre';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import css from './Genres.module.css';
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {mainActions} from "../../redux/slices/slice";

const Genres = () => {
    const { genreId } = useParams<{ genreId?: string }>();
    const [query] = useSearchParams({ page: '1' });
    const page = query.get('page') || '1'!;
    const navigate = useNavigate();
    const {genres,movies} = useAppSelector((state) => state.main);
    const dispatch = useAppDispatch();

    useEffect(() => {

        dispatch(mainActions.getMoviesByGenre({genre_ids:genreId,page}))

    }, [genreId, page]);

    useEffect(() => {
        dispatch(mainActions.getGenres())
    }, []);

    return (
        <div className={css.bk}>
            <div className={css.dd}>
                {genres && genres.map(genre => (
                    <Genre key={genre.id} genre={genre} />
                ))}
            </div>
            {(
                <div className={css.movies}>
                    {movies.map(movie => (
                        <div onClick={() => navigate(`/movies/${movie.id}`, { state: movie })} className={css.movie} key={movie.id}>
                            {movie.poster_path ? (<img className={css.imggxxx} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />) : (<div>{movie.title}</div>)}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export { Genres };

