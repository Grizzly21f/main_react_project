import {urls} from "../constant/baseURL";
import {IRes} from "../types/IResType";
import {axiosService} from "./axiosService";
import {IGenres} from "../interface/genresInterface";


const axiosMoviesInfoServices = {
    getAll:():IRes<IGenres> => axiosService.get(urls.genre,{})
};

export { axiosMoviesInfoServices };