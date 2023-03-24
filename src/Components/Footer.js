import React from 'react'
import {Link} from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <Link to={{ pathname: "https://www.instagram.com/felipegarces1" }} target="_blank"><InstagramIcon /></Link>
      </div>
      <p>&copy; Sitio WEB Realizado en REACT por Felipe Garcés A. <Link to = '/contacto'>Contacto</Link></p>
    </div>
  )
}

export default Footer