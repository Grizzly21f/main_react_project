
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IMovie } from "../../interface/moviesinterface";
import {IGenre, IGenres} from "../../interface/genresInterface";
import { axiosMoviesServices } from "../../services/axiosMoviesServices";
import { axiosMoviesInfoServices  } from "../../services/axiosMoviesInfoService";
import { IMovies } from "../../interface/moviesinterface";
import { AxiosError } from "axios";
import {axiosGenresService} from "../../services/axiosGenresService";
import {axiosSearchMovies} from "../../services/axiosSearchMovies";


interface IState {
    total_pages: number;
    movies: IMovie[];
    movieById: string;
    genres: IGenre[];
    errors: boolean;
}

const initialState: IState = {
    total_pages: 500,
    movies: [],
    movieById: null,
    genres: null,
    errors: null,
};

const getMovies = createAsyncThunk<IMovies, { page: string }>(
    'mainSlice/getMovies',
    async ({ page }, thunkAPI) => {
        try {
            const { data } = await axiosMoviesServices.getAll(page);
            return thunkAPI.fulfillWithValue(data);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);
const getMoviesByGenres = createAsyncThunk<IMovies, { page: string }>(
    'mainSlice/getMoviesByGenres',
    async ({ page }, thunkAPI) => {
        try {
            const { data } = await axiosMoviesServices.getAll(page);
            return thunkAPI.fulfillWithValue(data);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);
const getMoviesInfoServices = createAsyncThunk<IGenres,void>(
    'mainSlice/getMoviesInfoServices',
    async (_, thunkAPI) => {
        try {
            const { data } = await axiosMoviesInfoServices.getAll();
            return thunkAPI.fulfillWithValue(data);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);


const getGenres = createAsyncThunk<IGenres, void>(
    'moviesSlice/getGenres',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await axiosGenresService.getAll()
            return data
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.response?.data)
        }
    }
)
const getMoviesByGenre = createAsyncThunk<IMovies, {genre_ids: string,page:string}>(
    'moviesSlice/getMoviesByGenre',
    async ({genre_ids,page}, {rejectWithValue}) => {
        try {
            const {data} = await axiosGenresService.getMoviesByGenre(genre_ids,page)
            return data
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.response?.data)
        }
    }
)
const getSearchMovies = createAsyncThunk<IMovies, {query: string, page: string}>(
    'moviesSlice/getSearchMovies',
    async ({query,page}, {rejectWithValue}) => {
        try {
            const {data} = await axiosSearchMovies.getSearchMovies(query,page)
            return data
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.response?.data)
        }
    }
)


const mainSlice = createSlice({
    name: 'mainSlice',
    initialState,
    reducers: {},

    extraReducers: (builder) =>
        builder
            .addCase(getMovies.fulfilled, (state, action) => {
                state.movies = action.payload.results;
                state.errors = null;
            })
            .addCase(getMovies.rejected, (state, action) => {
                state.errors = true;
            })
            .addCase(getGenres.fulfilled, (state, action) => {
                state.genres = action.payload.genres
                state.errors = null;
            })
            .addCase(getMoviesByGenre.fulfilled, (state, action) => {
                state.movies = action.payload.results;
                state.errors = null;
            }) .addCase(getMoviesInfoServices.fulfilled, (state, action) => {
                state.genres = action.payload.genres;
                state.errors = null;
            })
            .addCase(getSearchMovies.fulfilled, (state, action) => {
                state.movies = action.payload.results;
                state.errors = null;
            })
            .addCase(getMoviesByGenres.fulfilled, (state, action) => {
                state.movies = action.payload.results;
                state.errors = null;
            })

});

const { reducer: mainReducer, actions } = mainSlice;

const mainActions = {
    ...actions,
    getMovies,
    getGenres,
    getMoviesByGenre,
    getMoviesInfoServices,
    getSearchMovies

};

export { mainReducer, mainActions };


