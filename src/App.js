import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Meals from './components/Meals/Meals';
import Notfound from './components/Notfound/Notfound';
import Navlink from './components/Navlink/Navlink';
import Mealdetails from './components/Mealdetails/Mealdetails';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Router>
        <Navlink></Navlink>
        <Switch>
          <Route exact path="/">
            {/* <Home></Home> */}
            <Meals></Meals>
          </Route>
          <Route path="/home">
              <Home></Home>
          </Route>
          <Route path="/meals">
              <Meals></Meals>
          </Route>
          <Route path="/meal/:mealId">
            <Mealdetails></Mealdetails>
          </Route>
          <Route path="*">
               <Notfound></Notfound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
