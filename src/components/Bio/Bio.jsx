import React from 'react'
import zapas from '../../assets/img/super.png'

import './Bio.scss'

const Bio = () => {
  return (
    <div className="bio">
        
        <img src={zapas} alt="zapas" className="img-zapis" />
        <div>
            
        <p className='pp'>
            <p className='pp1'>¿Quienes somos?</p>
        <br />
        <br /> Nuestra historia comenzó hace varios años. Nos dimos cuenta de la creciente demanda de ropa en línea y vimos una oportunidad para crear algo especial.
        <br />
        <br />
     Queríamos ofrecer a nuestros clientes una selección cuidadosamente curada de prendas de vestir de alta calidad y marcas reconocidas.
    <br />
    <br />
    Con mucho esfuerzo y dedicación, logramos construir una plataforma elegante y fácil de usar, donde los amantes de la moda pueden explorar una amplia gama de estilos y encontrar las últimas tendencias.</p>
            
       

        </div>
              
        

        </div>
  )
}

export default Bio