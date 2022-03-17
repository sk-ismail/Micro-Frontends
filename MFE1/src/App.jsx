import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';

import './index.css';

const App = (props) => {
 
  const checking=()=>{
    console.log(props)
  }
 
  
  return(
  <div className='container'>
    <div>

      MFE1 Testing
   
    </div>
 
    <Button value={4} checkMe={()=>checking()}>
      MFE1 button
    </Button>
      
  </div>)
  };
ReactDOM.render(
  <App />,
  document.getElementById(
    'app'
  )
);
