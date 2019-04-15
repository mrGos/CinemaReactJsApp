import getUrl from '../../Common/UrlConfig';

 //import axios from 'axios'

 //import{pageSizeHomeDefault} from './../../Common/PageConfiguration'

const getShowtimeByMovieTheater = (movieId,theaterId)=>{
    let url= getUrl()+`showtime/getallshowtimesbymovietheater?movieId=${movieId}&theaterId=${theaterId}`
    //console.log(url)
    return fetch(url)
          .then(results => results.json())
}

export{
    getShowtimeByMovieTheater
}