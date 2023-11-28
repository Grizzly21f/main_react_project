import React, {useEffect, useState} from 'react';
// @ts-ignore
import StarRatings from 'react-star-ratings';
import css from './MoviesInfo.module.css';
import Genre from '../Genres/Genre/Genre';
import {IMovie} from "../../interface/moviesinterface";
import {useAppLocation} from "../../hooks/useAppLocation";
import {axiosMoviesInfoServices} from "../../services/axiosMoviesInfoService";
import {IGenres} from "../../interface/genresInterface";
import {IGenre} from "../../interface/genresInterface";


const MoviesInfo = () => {
    const [genres,setGenres] = useState<IGenres>();

    useEffect(() => {
        axiosMoviesInfoServices.getAll().then(({ data }) => setGenres(data));

        // fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${'8214d64ab5cfce4275b9c30f9ebd3352'}`)
        //     .then(response => response.json())
        //     .then(data => setGenres(data.genres));
     }, []);



    const { state } = useAppLocation<IMovie>();
    console.log(state)
    let currentFilmGenres: IGenre[] = [];

    genres?.genres.map(genre => {
        state.genre_ids.map(stateGenre => {
            if (stateGenre == genre.id) {
                currentFilmGenres.push(genre)
            }
        })
    })

    console.log(currentFilmGenres)

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








