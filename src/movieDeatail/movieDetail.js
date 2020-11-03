import React from 'react'
import { data } from "../data";
import "./movieDetail.css"
function movieDetail({match}) {
    let movie= data.find(movie => movie.id === Number(match.params.id));
    return (
        <div className="description">
            <h2 style={{color:"orangered"}}>{movie.title}</h2>
            <img style={{width:"33%"}} src={movie.posteUrl} alt={movie.title} />
            <h2 className="descrip" >{movie.description}</h2>
            {movie.trailer}
        </div>
    )
}

export default movieDetail
