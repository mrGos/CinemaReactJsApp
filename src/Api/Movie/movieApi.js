import getUrl from '../../Common/UrlConfig';

 //import axios from 'axios'

 import{pageSizeHomeDefault} from './../../Common/PageConfiguration'

const getAllMovie = (statusType=1)=>{
    let url= getUrl()+`movie/getallmovies?statusType=${statusType}`;
   // console.log(url)
    return fetch(url)
          .then(results => results.json())
}

const getMoviesByCondition = ( statusType=1,top=pageSizeHomeDefault)=>{   
    let url= getUrl()+`movie/getmoviesbycondition?top=${top}&statusType=${statusType}`;
  //  console.log(url)
    return fetch(url)
          .then(results => results.json())
}

const getMoviesByPaging = (keyword='',page=3,pageSize=pageSizeHomeDefault, statusType=1)=>{   
  let url= getUrl()+`movie/getallmoviespaging?keyword=${keyword}&page=${page}&pageSize=${pageSize}&status=${statusType}`;

  //  console.log(url)
  return fetch(url)
        .then(results => results.json())
}

const getMovieById = ( id)=>{   
  let url= getUrl()+`movie/getmoviebyid?id=${id}`;
//  console.log(url)
  return fetch(url)
        .then(results => results.json())
}

export{
    getAllMovie,
    getMoviesByCondition,
    getMovieById,
    getMoviesByPaging
}