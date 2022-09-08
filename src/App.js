import NavBar from "./NavBar";
import Home from "./Home";
import Teas from "./Teas";
import About from "./About";
import TeaForm from "./TeaForm"
import {Route,Switch} from "react-router-dom"
import React, {useState,useEffect} from "react"
function App() {
  const [teas,setTeas] = useState([])
  function onAddTea(newTea) {
    setTeas([...teas,newTea])
  }
  useEffect(()=>{
    fetch("http://localhost:3000/tea")
    .then((r)=>r.json())
    .then ((teas)=>setTeas(teas))
  },[])
  return (
    <div>
      <NavBar/>
      <Switch>
        <Route exact path = "/">
          <Home/>
        </Route>
        <Route exact path = "/about">
          <About/>
        </Route>
        <Route exact path = "/teas">
          <Teas teas ={teas}/>
        </Route>
        <Route exact path = "/addteas">
          <TeaForm onAddTea={onAddTea}/>
          </Route>
      </Switch>
    </div>
  );
}

export default App;
