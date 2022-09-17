import React from 'react';
import { NavLink } from 'react-router-dom';

function Profiles() {
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

      <div style={{ background: 'green', marginTop: '1%',  }}  > Some contents of Profiles must be here </div>

    </div>
  )
}

export default Profiles;
