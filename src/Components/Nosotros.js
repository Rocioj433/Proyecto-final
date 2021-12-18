import React from 'react'
import './nosotros.css'
import logo from '../assets/about.jpg'

const Nosotros = () => {
    return (
        <div className='about' id='about'>
          <div className="about-img">
            <img src={logo} alt="logo" />
        </div>
        <div className="about-text">
            <h2>Guayerd<span>Bikes</span></h2>
            <p>Nace en el año 1985 en Rafaela, provincia de Santa Fe, Argentina, como un proyecto del grupo 2, quienes
                comenzaron con un taller destinado a la reparación de bicicletas en su domicilio particular. Tiempo
                después las exigencias del mercado los impulsa a fabricar sus propias bicicletas, en un espacio más
                apropiado. Por este motivo instalan su fábrica de bicicletas en la localidad de Susana, situada a 12 Km
                de Rafaela.</p>
            <p> Hoy, la misma cuenta con una dotación de más de 90 trabajadores distribuidos entre administración,
                fábrica, depósito, local comercial y logística. El esfuerzo y trabajo en equipo hacen que se fabriquen
                más de 100 mil bicicletas al año, que luego se distribuyen en todo el país.</p>
            <button className="btn">Lean more</button>
        </div> 
        </div>
    )
}

export default Nosotros
