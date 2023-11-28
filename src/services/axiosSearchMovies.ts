import {urls} from "../constant/baseURL";
import { IRes } from "../types/IResType";
import { axiosService } from "./axiosService";
import {IMovies} from "../interface/moviesinterface";

const axiosSearchMovies = {
    getSearchMovies: (query: string, page: string): IRes<IMovies> => axiosService.get( urls.search,{ params: { query,page } })};
export { axiosSearchMovies };
