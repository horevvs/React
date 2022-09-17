import React from 'react';
import { NavLink } from 'react-router-dom';


function Home() {
  return (
    <div>

      <NavLink to={'/Blog'}>
        Blog
      </NavLink>

      <NavLink to={'/Profiles'}>
      Profiles
      </NavLink>

      <NavLink to={'/Chats'}>
      Chats
      </NavLink>



    </div>
  )
}

export default Home;

