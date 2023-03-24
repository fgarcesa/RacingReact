import React, {useState} from 'react';
import Logo from '../assets/logoblanco.png';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';
import HomeIcon from '@mui/icons-material/Home';

function Navbar() {

  const [openLinks, setOpenLinks] = useState(false)

  const toggleNavbar = () =>{
    setOpenLinks(!openLinks)
  }
  return (
    <div className='navbar'>
      <div className='leftside' id={openLinks ? 'open' : 'close'}>
      <Link to = '/'><img src={Logo} /></Link>
        <div className='hiddenLinks'>
          <Link to = '/'>Inicio</Link>
          <Link to = '/resultados'>Resultados</Link>
          <Link to = '/sobremi'>Sobre mi</Link>
          <Link to = '/contacto'>Contacto</Link>
        </div>
      </div>
      <div className='rightside'>
        <Link to = '/'><HomeIcon /></Link>
        <Link to = '/resultados'>Resultados</Link>
        <Link to = '/sobremi'>Sobre mi</Link>
        <Link to = '/contacto'>Contacto</Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  )
}

export default Navbar