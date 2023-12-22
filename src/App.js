import logo from './logo.svg';
import LoginPage from './Components/LoginPage';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import RegisterAndLogin from './Components/RegisterAndLogin';
import ForgotPassword from './Components/ForgotPassword';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/loginPage' element={<LoginPage />} />
        <Route path='/' element={<RegisterAndLogin />} />
        <Route path='/home' element={<Home />} />
        <Route path='/reset' element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
