import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Components/Home/Home';
import { Dashboard } from './Components/Home/Dashboard';

function App() {
  return (
    <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={[<Dashboard/>]}/>
  </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
