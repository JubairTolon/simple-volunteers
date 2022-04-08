import { Route, Routes } from 'react-router';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import Volunteers from './components/Volunteers/Volunteers';

function App() {
  return (
    <div className="App">
      <h3>HEllo volunteers</h3>
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/volunteers' element={<Volunteers></Volunteers>}></Route>
        <Route path='/header' element={<Header></Header>}></Route>
      </Routes>
    </div>
  );
}

export default App;
