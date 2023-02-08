import './index.css';
import './App.css';
import Navbar from './Components/Navbar';
import Home  from './Components/Home';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Linechart from './Components/Linechart';
import Piechart from './Components/Piechart';
import Barchart from './Components/Barchart';
import Add from './Components/Add';



function App() {
  return (
    <Router>
    <>
 <Navbar/>
    <Switch>
      <Route exact path="/">
    <Home/> 
    </Route>
    <Route exact path="/home">
    <Home/> 
    </Route>
    <Route exact path="/linechart">
    <Linechart/> 
    </Route>
    <Route exact path="/piechart">
    <Piechart/>
    </Route>
    <Route exact path="/barchart">
    <Barchart/>
    </Route>
    <Route exact path="/addfashion">
    <Add/>
    </Route>
    
    
    </Switch>  </>
    </Router>
  );
  }
export default App;
