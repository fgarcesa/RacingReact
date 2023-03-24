import React from 'react'
import ImgAbout from '../assets/imagen11.jpg';
import '../styles/About.css';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className='about'>
      <div className='topabout' style={{backgroundImage: `url(${ImgAbout})`}}></div>
      <div className='bottomabout'>
        <h1>FELIPE GARCÉS A</h1>
        <h2>Piloto TC2000 Colombia</h2>
        <p>Felipe Garcés es un ingeniero de producción radicado en la ciudad de Medellín Colombia, desde pequeño acompañaba siempre a su padre a diferentes competencias automovilísticas a nivel local, de tipo amateur o aficionado, como diferentes eventos de trepadores o circuitos urbanos. Es por esta razon, que desde siempre existió el interes por el automovilismo.</p>
        <p>En el año 2020 en medio de la pandemia por COVID-19 que sacudió al mundo entero, uno de los planes de entretenimiento fue el simulador de competencias, a través del cual se revivió la pasión por el automovilismo.</p>
        <p>Es por esto que durante el año 2020 y en plena pandemia se inició con la construcción del actual vehículo de competencia, para hacer el debut en el campeonato TC2000 en la categoría Academía Clase A en la tercera competencia del año 2021, finalizando su participación en el 2021 en la categoría TC Junior.</p>
        <p>Para el año 2022 se realizan grandes mejoras en la plataforma del vehículo, primero pasando el cilindraje a 2.000cc y cambiando componentes por unos de mejor calidad, así iniciaría la temporada 2022 en la categoría TC Junior.</p>
        <Link to = '/contacto'>
            <button>CONTACTO</button>
        </Link>
      
      </div>
    </div>
  )
}

export default About