
import {urls} from "../constant/baseURL";
import {IMovies} from "../interface/moviesinterface";
import {IRes} from "../types/IResType";
import {axiosService} from "./axiosService";

const axiosMoviesServices = {
    getAll:(page:string):IRes<IMovies> => axiosService.get(urls.movies,{params:{page}})
};

export { axiosMoviesServices };

