import React from 'react';
import {Genres} from "../components/Genres/Genres";
import css from "./GenresPage.module.css"
import {AppPagination} from "../components/Movies/Movie/AppPagination";


const GenresPage = () => {
    const total_pages = 500;
    return (
        <div className={css.ddd}>
            <Genres/>
            <AppPagination total_pages={total_pages} />
        </div>
    );
};

export  {GenresPage};