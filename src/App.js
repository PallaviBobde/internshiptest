import React,{useState,useEffect} from 'react';
import axios from "axios";
import Home from './components/Home';
import Show from './components/Show';
import {BrowserRouter,Switch,Route,Redirect} from "react-router-dom";
import './App.css';

const baseURL = "https://api.tvmaze.com/search/shows?q=all";
  
function App() {
  const [list, setList] = useState([]); 

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setList(response.data);
      // console.log(response.data[0].show.name);
    });
  }, []);

  return (
      

    <BrowserRouter>
        <Switch>
          <Route exact path='/' render={()=><Home list={list} />} />
          <Route exact path='/show/:id' render={()=><Show list={list}/>} />
          <Redirect to='/' />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
