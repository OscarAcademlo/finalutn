import React from 'react'

const Home = () => {
  return (
    <div className='container__home' > 
        <div className="titulo">
        <h1>Esta es nuestra casa</h1>
        </div>
        <div className="home">
        <div className="img">
        <img className='foto_home' src="/public/bici.jpg" alt="" />
        </div>
        <div className="img1">
        <h4 className='texto'>
        Somos tercera generación de bicicleteros en Bariloche,50 años en el rubro y en nuestra empresa llevamos 15 años acompañando a nuestros clientes con la mejor atención y los mejores precios.
        </h4>
        
        <img className='lugar' src="public/interior.jpeg" alt="" />
        </div>
        </div>
        
    </div>
  )
}

export default Home