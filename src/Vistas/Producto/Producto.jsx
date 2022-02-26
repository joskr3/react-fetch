import React from 'react'
import Card from '../../Componentes/Card/Card'
import Hero from '../../Componentes/Card/Hero'
import Footer from '../../Componentes/Footer/Footer'
import Header from '../../Componentes/Header/Header'
import useFetch from "react-fetch-hook";
import Loading from '../../Componentes/Loading/Loading'

const Producto = () => {

  const { isLoading, data, error } = useFetch( "https://fakestoreapi.com/products" );

  if ( isLoading ) {
    return <Loading />
  }

  if ( error ) {
    return <p>Error</p>
  }

  return (
    <>
      <Header />
      <main>
        <Hero title="A big headline" description="a general description" btnText="Detail" />
        {
          data.map( ( producto, index ) => {
            return (
              <Card
                key={index}
                title={producto.title}
                lead={producto.description}
                url={producto.image}
                theme="dark"
              />
            )

          } )
        }
      </main>
      <Footer />
    </>
  )
}

export default Producto