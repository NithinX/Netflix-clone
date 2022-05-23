import React, { useEffect, useState } from 'react'
import "./rowpost.css"
import axios from "../constants/axios";
import {imageUrl} from "../constants/constants";

function Rowpost(props) {

  const [movies, setMovies] = useState([])

  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      console.log(response.data.results);
      setMovies(response.data.results)
    }).catch(err=>{
      console.log(err)
    })
  },[])

  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
          {movies.map((movie,index)=>
            <img key={index} className={props.isLarge ? 'poster' : 'smallPoster'} src={`${imageUrl+movie.poster_path}`} alt={movie.name} />
          )}
        </div>
    </div>
  )
}

export default Rowpost