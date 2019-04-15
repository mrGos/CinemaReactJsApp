import React from 'react';
import TheaterChildItem from './TheaterChildItem'

const TheaterChild = (params) => {
    //console.log(params.theatersChild)
    //const {Id,Name} = params.theatersChild
    const Element = params.theatersChild.map((e,index)=>{
        return  <TheaterChildItem 
                   setTheaterId={params.setTheaterId}
                    item={e}
                    key={index}/>
    })
    return (
        // <button id={Name} className="tablinks" ><h6> {Id}</h6></button>
       <div>
            {Element}
       </div>
        
    );
};

export default TheaterChild;