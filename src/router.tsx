import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout/MainLayout";
import {MovieinfoPage ,MoviesPage, SearchPage ,GenresPage} from "./pages";
import React from "react";

const router = createBrowserRouter([
    {path:'',element:<MainLayout/>, children:[
            {index:true,element:<Navigate to={'movies'}/>},
            {path:'movies', element:<MoviesPage/>},
            {path:'movies/:id',element:<MovieinfoPage/>},
            {path:'genres',element:<GenresPage/>},
            {path:'/genres/:genreId',element:<GenresPage/>},
            {path:'search',element:<SearchPage/>}
        ]}
])

export {router}



