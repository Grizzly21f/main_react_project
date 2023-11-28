import React from 'react';
import {SearchMovies} from "../components/Search/SearchMovies";
import {AppPagination} from "../components/Movies/Movie/AppPagination";
import css from './GenresPage.module.css'

const SearchPage = () => {
    const total_pages = 500;


    return (
        <div className={css.ddd}>
            <SearchMovies/>
            <AppPagination  total_pages={total_pages} />
        </div>
    );
};

export {SearchPage};