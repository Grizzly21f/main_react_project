import React from 'react';
import css from './MoviesPage.module.css'
import { AppPagination } from "../components/Movies/Movie/AppPagination";
import {Movies} from "../components/Movies/Movies";
import {Outlet} from "react-router-dom";


const MoviesPage = () => {
    const total_pages = 500;

    return (
        <div className={css.bk}>
            <Movies />
            <AppPagination total_pages={total_pages} />
            <Outlet/>
        </div>
    );
};

export { MoviesPage };
