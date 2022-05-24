import React, { useEffect, useState } from "react";
import "./banner.css";
import axios from "../constants/axios";
import {imageUrl} from "../constants/constants";

function Banner(props) {

  const [movie,setMovie] = useState();

useEffect(()=>{
  axios.get(props.url).then((response)=>{
    let max =response.data.results.length - 1;
    let min =0;
    let rand = Math.floor(Math.random() * (max - min + 1)) + min;
    setMovie(response.data.results[rand]);
  }).catch(err=>{
    console.log(err)
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
