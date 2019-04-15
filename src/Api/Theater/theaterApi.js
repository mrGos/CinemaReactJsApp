import getUrl from '../../Common/UrlConfig';

 //import axios from 'axios'

 //import{pageSizeHomeDefault} from './../../Common/PageConfiguration'

const getAllTheaters = ()=>{
    let url= getUrl()+`theater/getalltheaters`;
   // console.log(url)
    return fetch(url)
          .then(results => results.json())
}
const getAllTheaterChild = (id)=>{
    let url= getUrl()+`theater/getalltheaterschild?id=${id}`;
   // console.log(url)
    return fetch(url)
          .then(results => results.json())
}

export{
    getAllTheaters,
    getAllTheaterChild
}