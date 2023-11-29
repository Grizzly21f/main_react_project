import { IGenres } from "../interface/genresInterface";
import { urls } from "../constant/baseURL";
import { IRes } from "../types/IResType";
import { axiosService } from "./axiosService";
import {IMovies} from "../interface/moviesinterface";

const axiosGenresService = {
    getAll: (): IRes<IGenres> => axiosService.get(urls.genre),
    getMoviesByGenre: (genre_ids: string,page:string): IRes<IMovies> =>  axiosService.get(`genre/${genre_ids}/movies`,{params:{page}})
};

export { axiosGenresService };
