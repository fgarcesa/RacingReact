import React from 'react'
import {Link} from 'react-router-dom';
import HeaderPic from '../assets/bannerpic.jpg'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home' style={{backgroundImage: `url(${HeaderPic})`}}>
        <div className='headerContainer'>
          <h1>Felipe Garcés</h1>
          <p>Piloto TC2000 Colombia, categoria TC Junior</p>
          <Link to = '/resultados'>
            <button>RESULTADOS</button>
          </Link>
        </div>
    </div>
  )
}

export default Home