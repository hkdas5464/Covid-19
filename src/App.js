import React from 'react'
import CoronaTable from './Components/CoronaTable';
import './App.css';
import TotalCase from './Components/Total_case'
import Test from './Components/Test'

import PageScroll from './Components/pageScroll/PageScroll';
import Header from './Components/Header/Header';


function App(){
  return(

    <div className="App">
    <Header/>
    <hr/>

    <TotalCase/>
    <div>
   
    <hr/>
    <CoronaTable/>
    </div>
    <PageScroll/>
    </div>
  )
}
export default App;