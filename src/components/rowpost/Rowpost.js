import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube';
import "./rowpost.css"
import axios from "../constants/axios";
import {imageUrl,API_KEY} from "../constants/constants";

function Rowpost(props) {

  const [movies, setMovies] = useState([])
  const [ytvideo, setYtvideo] = useState()

  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      console.log(response.data.results);
      setMovies(response.data.results)
    }).catch(err=>{
      console.log(err)
    })
  },[])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };
   
const handleVideo=(id)=>{
  console.log(id)
  axios.get(`movie/${id}/videos?api_key=${API_KEY}`).then(response=>{
    console.log(response.data)
    if(response.data.results.length!=0){
      setYtvideo(response.data.results[0])
    }
  })
}

  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
          {movies.map((movie,index)=>
            <img onClick={()=>handleVideo(movie.id)} key={index} className={props.isLarge ? 'poster' : 'smallPoster'} src={`${imageUrl+movie.poster_path}`} alt={movie.name} />
          )}
        </div>
        {ytvideo && <YouTube opts={opts} videoId={ytvideo.key}/>}
    </div>
  )
}

export default Rowpost