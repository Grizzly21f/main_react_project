const baseURL = 'https://api.themoviedb.org/3';
const movies = '/discover/movie';
const genre = '/genre/movie/list?api_key=8214d64ab5cfce4275b9c30f9ebd3352' ;
const poster = 'https://image.todb.org/t/p/w500';
const search = '/search/movie';
const character = '/movie';
const urls = {
    movies,
    genre,
    api: (apiKey: string) => `/genre/movie/list?api_key=${apiKey}`,
    byId: (id: string): string => `/movie/${id}`,
    poster: (key: string)=> `${poster}/${key}`,
    search,
    character:(id: number) => `${character}/${id}/credits`
}
export {baseURL,urls};
