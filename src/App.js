import './App.css';
import { Routes, Route } from 'react-router-dom'
import PrimaryLayout from './Component/Layout/index';
import Home from './Container/Home';
function App() {
  return (
    <Routes>
        <Route path='/' element={<PrimaryLayout />} />
    </Routes>
  );
}

export default App;
