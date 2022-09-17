import React from 'react';
import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from '../pages/Home'
import Blog from '../pages/Blog';
import Profiles from '../pages/Profiles';
import NotFound from '../pages/Notfound';
import  Chats from '../pages/Chats';


function App() {
  return (
    <>
      <header style={{ height: 200, widht: '100%', background: 'red', display: 'flex', }}>


        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/Profiles' element={<Profiles />} />
            <Route path='/Chats' element={<Chats />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>

      </header>




    </>
  );
}

export default App;
