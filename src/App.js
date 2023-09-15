import Navbar from "./components/Navbar/Navbar";
import Home from "./components/RiskTest/Home";
import HearthTest from "./components/HearthTest/HearthTest";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import RealAge from "./components/RealAge/RealAge";
import Forum from "./components/Forum/Forum";
import User from "./components/User/User";
import React,{useEffect, useState} from "react";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import AuthProvider from './Context/AuthContext';
import ForumPost from "./components/ForumPost/ForumPost";

function App() {


  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const handleLogin = () => {
    // Kullanıcının oturum açtığı zaman tetiklenecek fonksiyon
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Oturumu kapatma işlemleri
    setIsLoggedIn(false);
    localStorage.clear();
  };

  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
    if(storedIsLoggedIn){
      setIsLoggedIn(JSON.parse(storedIsLoggedIn));
    }
  },[]);

  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout}></Navbar>
      <AuthProvider>
        <Routes>
        
          <Route exact path="/" element={ <Home />} />
          <Route exact path="/hearthtest" element={<HearthTest />} />
          <Route exact path="/real_age" element={<RealAge />} />
          <Route exact path="/forums" element={<Forum />} />
          <Route exact path="/forumpost" element={<ForumPost />} />
          <Route exact path="/forumpost/:forumId" element={<ForumPost />} />
          <Route exact path="/users/:userId" element={<User />} />
          <Route exact path="/auth/login" element={ <Login handleLogin={handleLogin} /> } />
          <Route exact path="/auth/register" element={ <Register /> } />
          
        </Routes>
        </AuthProvider>
      </BrowserRouter>
      
    </div>
  );
}

export default App;