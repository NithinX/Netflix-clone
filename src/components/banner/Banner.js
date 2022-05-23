import React, { useEffect, useState } from "react";
import "./banner.css";
import axios from "../constants/axios";
import {API_KEY,imageUrl} from "../constants/constants";

function Banner() {

  const [movie,setMovie] = useState();

useEffect(()=>{
  axios.get(`trending/all/day?api_key=${API_KEY}&language=en-US`).then((response)=>{
    let max =response.data.results.length - 1;
    let min =0;
    let rand = Math.floor(Math.random() * (max - min + 1)) + min;
    setMovie(response.data.results[rand]);
  })
},[])

  return (
    <div 
    style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path :""})` }}
    className="banner" >
      <div className="content">
        <h1 className="title">{movie ? movie.title : " "}</h1>
        <div className="bannerBtns">
          <button className="btn">Play</button>
          <button className="btn">My list</button>
        </div>
        <h1 className="description">{movie ? movie.overview : " "}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
