import React, { useState, useEffect } from 'react'
import axios from "axios";
import useFetch from "react-fetch-hook";

const Home = () => {

  const [ url, setUrl ] = useState( '' );

  // useEffect( () => {
  //   fetch( 'https://pokeapi.co/api/v2/pokemon/ditto' ).then( response =>
  //     response.json().then( ( data ) => {
  //       setUrl( data?.sprites?.back_default );
  //     } )
  //   )

  // }, [] )

  // useEffect( () => {
  //   axios.get( 'https://pokeapi.co/api/v2/pokemon/ditto' )
  //     .then( function ( response ) {
  //       // handle success
  //       console.log( response?.data?.sprites?.back_default );
  //       setUrl( response?.data?.sprites?.back_default );
  //     } )

  // }, [] )


  const { isLoading, data } = useFetch( "https://pokeapi.co/api/v2/pokemon/ditto" );

  useEffect( function () {
    console.log( data );
  }, [ data ] )


  return (
    <div className="d-flex h-100 text-center text-white bg-dark vh-100">
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header className="mb-auto">
          <div>
            <h3 className="float-md-start mb-0">Cover</h3>
            <nav className="nav nav-masthead justify-content-center float-md-end">
              <a className="nav-link text-center text-white" aria-current="page" href="#">Home</a>
              <a className="nav-link text-center text-white" href="#">Features</a>
              <a className="nav-link text-center text-white" href="#">Contact</a>
            </nav>
          </div>
        </header>

        <main className="px-3 text-center text-white">
          <h1>Cover your page.</h1>
          <p className="lead text-center text-white">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
          <p className="lead">
            <a href="#" className="btn btn-lg  fw-bold border-white bg-white">Learn more</a>
          </p>

          <img src={data?.sprites?.back_default} alt="Ditto" className="img-fluid" />

        </main>

        <footer className="mt-auto text-white-50">
          <p>Cover template for <a href="https://getbootstrap.com/" className="text-white">Bootstrap</a>, by <a href="https://twitter.com/mdo" className="text-white">@mdo</a>.</p>
        </footer>
      </div>

    </div>
  )
}

export default Home