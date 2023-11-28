
import React, { useEffect, useState } from 'react';
import { IGenre } from '../../interface/genresInterface';
import { axiosGenresService } from '../../services/axiosGenresService';
import Genre from './Genre/Genre';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import css from './Genres.module.css';
import { IMovie } from '../../interface/moviesinterface';

const Genres = () => {
    const [genres, setGenres] = useState<IGenre[]>([]);
    const [movies, setMovies] = useState<IMovie[]>([]);
    const { genreId } = useParams<{ genreId?: string }>();
    const [query] = useSearchParams({ page: '1' });
    const page = query.get('page') || '1'!;
    const navigate = useNavigate();

    useEffect(() => {
        if (genreId) {
            axiosGenresService.getMoviesByGenre(genreId, page).then(({ data }) => { setMovies(data.results) });
        }
    }, [genreId, page]);

    useEffect(() => {
        axiosGenresService.getAll().then(({ data }) => { setGenres(data.genres) });
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
