import axios from "axios";


const BASE_URL = 'https://api.themoviedb.org/3';

const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NGYyYjI5MDUxNDAxMDg4NWY0YmRlNGYzOGNjN2VhOCIsInN1YiI6IjY1NzljYzVlNGJmYTU0NWNmZjkxYTQ5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pDu_Ft-2-sZcDzZP18OR9Jn4D5w4WQYk6fGVmkFuMl0";
const headers = {
    Authorization: "bearer " + TMDB_TOKEN
}

export const fetchData = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params
        })
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
}