import React from 'react';
import "./styles.css";
const Card = ( { title, lead, theme = "light", url } ) => {

    return (
        <div className={`bg-${theme} me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden`}>
            <div className="my-3 p-3">
                <h2 className="display-5 text-white" >{title}</h2>
                <p className="lead text-white">{lead}</p>
                <img src={url} alt="img1" width="500px" />
            </div>
            <div className="bg-dark shadow-sm mx-auto e1" ></div>
        </div>
    )
}

export default Card