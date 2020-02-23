import React from 'react';
import { getData } from './dataAccess';

export function ProductInfo(props){


  return(
    <div className='productInfoContainer'>
        <div className='productImageContainer'>
        <img src={getData().image}  className='productImage'/>
        </div>
        <div>
       {getData().title}
       </div>
    </div>

  );
}
