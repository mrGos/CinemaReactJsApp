import getUrl from '../../Common/UrlConfig';
import Axios from 'axios';
 import axios from 'axios'

const getAllMovie = ()=>{
    let url= getUrl()+'movie/getall';
    return axios.get(url)
    .then(res =>res);
}

export{
    getAllMovie
}