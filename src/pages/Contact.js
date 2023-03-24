import React from 'react'
import '../styles/Contact.css'
import ImgContact from '../assets/imagen7.jpg';

function Contact() {
  return (
    <div className='contact'>
      <div className='leftside' style={{backgroundImage: `url(${ImgContact})`}}></div>
      <div className='rightside'>
        <h1>Contacto</h1>
        <form id="contact-form" method="POST">
          <label htmlFor="name">Nombre</label>
          <input name="name" placeholder="Ingrese su nombre..." type="text" required />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Ingrese su email..." type="email" required />
          <label htmlFor="message">Mensaje</label>
          <textarea
            rows="6"
            placeholder="Ingrese su mensaje..."
            name="message"
            required
          ></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  )
}

export default Contact