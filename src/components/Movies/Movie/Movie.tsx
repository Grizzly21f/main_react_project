import React, { FC } from 'react';
import { IMovie } from "../../../interface/moviesinterface";
import { useNavigate } from "react-router-dom";
import css from './movie.module.css'
interface IProps {
    movie: IMovie
}

const Movie: FC<IProps> = ({ movie }) => {
    const navigate = useNavigate();
    const moviePoster = movie?.poster_path;

    return (
        <div onClick={() => navigate(`/movies/${movie.id}`, { state: movie })}>
            {
                moviePoster ?
                    <img className={css.imgg} src={`https://image.tmdb.org/t/p/w500${moviePoster}`} alt={movie.title} /> :
                    <div>
                        {movie.title}
                    </div>
            }
        </div>
    );
};

export default Movie;

