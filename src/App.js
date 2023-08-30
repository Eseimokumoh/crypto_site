import React, {useContext} from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Crypto from './components/Crypto';
import Stock from './components/Stock';
import Signup from './components/Signup';
import Footer from './components/Footer';
import Admin from './components/adminpages/Admin';
import Login from './components/adminpages/Login';
import List from './components/adminpages/List';
import Single from './components/adminpages/Single';
import New from './components/adminpages/New';
import { productInputs, userInputs, numberInputs } from './formSource';
import ErrorBoundary from './ErrorBoundary';
import './style/dark.css';
import { DarkModeContext } from './components/context/darkModeContext';
import { AuthContextProvider } from './components/context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import ChatApp from './components/adminpages/ChatApp';


function App() {

  const {darkMode} = useContext(DarkModeContext)
  return (
    <ErrorBoundary>
      
      <div className={darkMode ? "app dark" : "app"}>
      <AuthContextProvider>
      
      <Routes>
        <Route path="/" element={<><Navbar/><Hero/></>}/>
        <Route path="/Crypto" element={<><Navbar/><Crypto/></>}/>
        <Route path="/Stock" element={<><Navbar/><Stock/></>}/>
        <Route path="/Signup" element={<><Navbar/><Signup/></>}/>
        <Route path="/Footer" element={<><Navbar/><Footer/></>}/>
        <Route path='/ChatApp' element={<><Navbar/><ChatApp/></>}/> 
      </Routes>

      <Routes>
      <Route path= "/Admin" element={<Admin inputs={numberInputs}/>}/>
      <Route path='login' element={<><Navbar/><Login/></>}/>
      <Route path='users'>
        <Route index element={<><Navbar/><List/></>}/>
        <Route path=':id' element={<ProtectedRoute><Navbar/><Single/></ProtectedRoute>}/>
        <Route path='new' element={<><Navbar/><New inputs={userInputs} title='Add New User'/></>}/>       
      </Route>
      <Route path='products'>
        <Route index element={<><Navbar/><List/></>}/>
        <Route path=':productId' element={<ProtectedRoute><Navbar/><Single/></ProtectedRoute>}/>
        <Route path='new' element={<><Navbar/><New inputs={productInputs} title='Add New Product'/></>}/>        
      </Route>
      </Routes>
      </AuthContextProvider>
      </div>
    </ErrorBoundary>
  );
}

export default App;
