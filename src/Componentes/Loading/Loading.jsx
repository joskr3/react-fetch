import React from 'react'

const Loading = () => {
  return (
    <button className="btn btn-primary" type="button" >
    <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
    Cargando...
  </button>
  )
}

export default Loading