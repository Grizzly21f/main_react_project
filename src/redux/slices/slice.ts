import {createSlice} from "@reduxjs/toolkit";
import {IMovie} from "../../interface/moviesinterface";
import {IGenre} from "../../interface/genresInterface";


interface IState {
    total_pages: number,
    movies: IMovie[],
    movieById:string,
    genres: IGenre[],
    errors: boolean,
}

const initialState:IState = {
    total_pages: 500,
    movies: [],
    movieById: null,
    genres: null,
    errors: null,
}
const  mainSlice = createSlice({
    name: 'mainSlice',
    initialState,
    reducers: {}
})


const {reducer: mainReducer,actions} = mainSlice;

const mainActions = {
    ...actions,
}

export {
    mainReducer,
    mainActions
}

