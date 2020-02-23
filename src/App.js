import React from 'react';
import './App.css';
import  { getSalesData } from './dataAccess.js';
import { Graph } from './graph';
import { ProductInfo } from './productInfo';

function App() {

  const data = React.useMemo(
    () => [
      {
        label: 'Sales',
        data: getSalesData()
      }
    ],
    []
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  );

  return (
    <div>
     <header>
       <h2>Stackline</h2>
     </header>

     <section>
      <nav>
       <ProductInfo/>
      </nav>

      <article>
        <h1>Retail Sales</h1>
        <Graph data={data} axes={axes}/>
      </article>
     </section>

    </div>
  );
}

export default App;
