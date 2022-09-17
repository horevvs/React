import React from 'react';
import { NavLink } from 'react-router-dom';
import '../components/Btn.css'
import { useState } from 'react';




function Chats() {



  const [addname, setAddname] = useState('')
  const [chat, setChat] = useState([{ name: '' }])


  function Addvalues() {

    setChat([...chat, { name: addname }])
  }


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

      <div style={{ background: 'green', marginTop: '1%', }}  > Some contents of Chats must be here </div>

      <input value={addname} placeholder='введите имя' onChange={(event) => setAddname(event.target.value)} />
      <button onClick={Addvalues} className='btn_comp'> Добавить чат </button>

      {chat.map((item, i) => {
            return (
              <div key={i}  >
                <div >  {item.name }  </div>
                
              </div>)
          })}


    </div>
  )
}

export default Chats;
