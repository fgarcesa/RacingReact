import React from 'react'
import { ResultsList } from '../helpers/ResultsList';
import ResultsItem from '../Components/ResultsItem';
import '../styles/Results.css'


function Results() {

  return (
    <div className='results'>
      <h1 className='resultsTitle'>Resultados</h1>
      
      <div className='resultsList'>
        {ResultsList.map((resultado, key) =>{
          return <ResultsItem 
            key={key}
              imagen={resultado.imagen} 
              anyo={resultado.anyo}
              valida={resultado.valida} 
              posicion={resultado.posicion} 
              resumen={resultado.resumen}
            />
        })}
      </div>
    </div>
  )
}

export default Results