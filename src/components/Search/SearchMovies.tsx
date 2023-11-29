import React, {useEffect, useState} from 'react';
import css from './SearchMovies.module.css'
import {useNavigate, useSearchParams} from "react-router-dom";
import {IMovie} from "../../interface/moviesinterface";
import {axiosSearchMovies} from "../../services/axiosSearchMovies";
import {useForm} from "react-hook-form";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {mainActions} from "../../redux/slices/slice";

const SearchMovies: React.FC = () => {
    const [query, setQuery] = useSearchParams({page: '1' });
    // const [movies, setMovies] = useState<IMovie[]>([]);
    const navigate = useNavigate();
    const {register,handleSubmit   } = useForm()
    const page = query.get('page') || '1'!;
    const { movies } = useAppSelector((state) => state.main);
    const dispatch = useAppDispatch();


    useEffect(() => {
        dispatch(mainActions.getSearchMovies({query:query.get('query'),page}))
        // axiosSearchMovies.getSearchMovies(query.get('query'),query.get('page')).then(({data})=> setMovies(data.results))
    }, [query.get('query'),query.get('page')]);


    const searchMovies =(value:{search:string}) => {
        setQuery(prev => {
            prev.set('query',value.search);
            return prev
        })
    }

    return (
        <div className={css.mainmain}>
            <form onSubmit={handleSubmit(searchMovies)} >
                <input className={css.inpu} type="text" {...register('search')} />
                <button className={css.btt}>Search</button>
            </form>

        <div className={css.main} >
            {movies.map((movie) => (
                <div key={movie.id} onClick={() => navigate(`/movies/${movie.id}`, { state: movie })} className={css.movie}>
                    {movie.poster_path && (<img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />)}
                </div>
            ))}
        </div>
        </div>
    );
};

export { SearchMovies };
