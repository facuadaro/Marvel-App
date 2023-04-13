import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Route, Router, Routes, Switch } from 'react-router-dom'
import Comics from './pages/Comics';
import Home from './pages/Home';
import Series from './pages/Series';
import Error404 from './pages/Error404';


function App() {
  return (
    <div>
      
      <Router>
        <Switch>
        <Route path='/' exact component={() => <Home />}></Route>
        <Route path='/inicio' exact component={() => <Home />}></Route>
        <Route path='/series' exact component={() => <Series />}></Route>
        <Route path='/comics' exact component={() => <Comics />}></Route>
        <Route exact component={() => <Error404 />}></Route>
        </Switch>
        <Router />
    </div>
  );
}

export default App;
