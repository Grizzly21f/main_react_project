import React, {useEffect} from 'react';
// @ts-ignore
import StarRatings from 'react-star-ratings';
import css from './MoviesInfo.module.css';
import Genre from '../Genres/Genre/Genre';
import {IMovie} from "../../interface/moviesinterface";
import {useAppLocation} from "../../hooks/useAppLocation";
import {IGenre} from "../../interface/genresInterface";
import {mainActions} from "../../redux/slices/slice";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";

const MoviesInfo = () => {
    const { genres } = useAppSelector((state) => state.main);
    const { state } = useAppLocation<IMovie>();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(mainActions.getMoviesInfoServices());
    }, []);

    let currentFilmGenres: IGenre[] = [];

    if (genres) {
        genres.forEach((genre: IGenre) => {
            state.genre_ids.forEach((stateGenre) => {
                if (stateGenre === genre.id) {
                    currentFilmGenres.push(genre);
                }
            });
        });
    }
    return (
        <div className={css.cc}>
            <div className={css.imggg}>
                <img src={`https://image.tmdb.org/t/p/w500${state.poster_path}`} alt={state.original_title} />
            </div>
            <div className={css.insd}>
                <div className={css.bakc}>
                    <div className={css.title}><strong>Назва:</strong> {state.original_title}</div>
                    <div><strong>Огляд:</strong> {state.overview}</div>
                    <div><strong>Дата виходу:</strong> {state.release_date}</div>
            <div className={css.genree}>
                       <div className={css.genreee}><strong>Жанри:</strong>{ currentFilmGenres.map((currentGenre, index) => {
                            return <Genre genre={currentGenre} key={index}/>
                        }) }</div>
                </div>
                </div>
                <div className={css.rat}>
                    <div className={css.rating}>
                        <StarRatings
                            rating={state.vote_average}
                            starRatedColor="#ffd700"
                            numberOfStars={10}
                            starDimension="70px"
                            starSpacing="5px"
                            name="rating"
                            isSelectable={false}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export { MoviesInfo };








