import React from 'react'

function ResultsItem({ anyo, imagen, valida, posicion, resumen }) {
  return (
    <div className='resultItem'>
        <div style={{backgroundImage: `url(${imagen})`}}></div>
        <h2>Año: {anyo}</h2>
        <h2>Valida: {valida}</h2>
        <p>Posición: {posicion}</p>
        <p>Resumen: {resumen}</p>
    </div>
  )
}

export default ResultsItem