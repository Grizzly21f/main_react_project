// genreService.ts
import { urls } from '../constant/baseURL';

const getGenreUrl = (apiKey: string) => {
    return urls.api(apiKey);
};

export { getGenreUrl };
