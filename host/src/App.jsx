import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
//import {  } from "micro-frontend-testingaddverb"

const MFE1_Button =
  React.lazy(() =>
    import('MFE1/Button')
  );

const App = (props) => {

  const checkMe=(data)=>{
       console.log(data);
       
       
  }

return(
  <div className='container'>
    <div>host</div>
    <React.Suspense fallback='Loading Button'>

      <MFE1_Button value={6} checkMe={checkMe}/>

      
      

    </React.Suspense>

   
 
  </div>
);}
ReactDOM.render(
  <App />,
  document.getElementById(
    'app'
  )
);
