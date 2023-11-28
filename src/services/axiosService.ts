import axios from "axios";
import { baseURL } from "../constant/baseURL";

const axiosService = axios.create({baseURL})

axiosService.interceptors.request.use(request=>{

    request.headers.Authorization ='Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MjE0ZDY0YWI1Y2ZjZTQyNzViOWMzMGY5ZWJkMzM1MiIsInN1YiI6IjY1NDYyNmFkZDhjYzRhMDBlM2NiNGY4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jqv1oQBXAgo3CZRlXtnhq-__LKC6ORbiTqzt2EAb13E'

    return request
})

export {axiosService};

