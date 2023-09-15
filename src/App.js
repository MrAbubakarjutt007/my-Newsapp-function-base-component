
import './App.css';

import React,{useState} from 'react'
import NevBar from './components/NevBar';
import News  from './components/News';
import Hader from './components/Hader';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const  App=(props)=>{
 const [progress, setProgress ]=useState(0)
 const apiKey = process.env.REACT_APP_NEWS_API
  
    return (   
      <div>
        <LoadingBar
        height={3}
        color='black'
        background='10'
        
        progress={progress}
      />
        <Hader/>
      <Router> 
           <NevBar/>
             <Routes>
             <Route  exact path='/' element={<News setProgress={setProgress} apiKey={apiKey} key="general" country="in" category="general" />}/>
             <Route  exact path='/' element={<News setProgress={setProgress} apiKey={apiKey} key="general" country="in" category="general" />}/>
                  
                 
             <Route exact path='/business' element={<News setProgress={setProgress} apiKey={apiKey} key="business"  category="business"/>}/>
                  
             

             <Route exact path='/entertainment' element={ <News setProgress={setProgress} 
             apiKey={apiKey} key="entertainment"  category="entertainment"/>}/>
                  
             
             <Route exact path='/general' element={ <News setProgress={setProgress} apiKey={apiKey} key="data"  category="general"/>}/>
                  
            
             <Route path='/health' element={<News setProgress={setProgress} apiKey={apiKey} key="health"  category="health"/>}/>
                  
             
             <Route exact path='/science' element={<News setProgress={setProgress} apiKey={apiKey} key="science"  category="science"/>}/>
                  
             
             <Route exact path='/sports' element={<News setProgress={setProgress} apiKey={apiKey} key="sports" category="sports"/>}/>
                  
             
             <Route exact path='/technology' element={<News setProgress={setProgress} apiKey={apiKey} key="technology" category="technology"/>}/>
                  
             
             </Routes> 
             </Router>      
      </div>
      
    )
  }
export default App;
