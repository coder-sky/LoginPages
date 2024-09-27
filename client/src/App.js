import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';

function App() {
  return (
    <>
    <BrowserRouter>

    <Routes>
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
