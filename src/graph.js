import React from 'react';
import './App.css';
import { Chart } from 'react-charts';

export function Graph(props){


  return(
    <div className='graphContainer'>
       <Chart data={props.data} axes={props.axes} />
    </div>

  );
}
