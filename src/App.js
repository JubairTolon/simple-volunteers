import { Route, Router } from 'react-router';
import './App.css';
import Home from './components/Home/Home';
import Volunteers from './components/Volunteers/Volunteers';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/volunteers' element={<Volunteers></Volunteers>}></Route>
      </Router>
    </div>
  );
}

export default App;
