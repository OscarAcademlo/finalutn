import React from 'react'
import '../../styles/components/pages/nosotros.css'

const Nosotros = () => {
  return (
    <div>
        <h1 className='titulo' >Este es el mejor equipo</h1>
        <div className="img">
          <div className="dani">
        <img className='img1'   src="/public/danigin.jpeg" alt="Daniel Gingins" />
        <h3>Daniel Gingins</h3>
        </div>
        <div className="ale">
        <img className='img1'  src="/public/alegin.jpeg" alt="Alejandro Gingins" />
        <h3>Alejandro Gingins</h3>
        </div>
        <div className="gaston">
        <img className='img1'  src="/public/gastongin.jpeg" alt="Gaston Gingins" />
        <h3>Gaston Gingins</h3>
        </div>
        </div>
    </div>
  )
}

export default Nosotros