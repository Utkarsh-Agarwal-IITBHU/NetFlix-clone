

import React, { useState,useEffect } from 'react';
import YouTube from 'react-youtube';
import axios from './axios';
import "./Row.css";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";


function Row({title,fetchUrl,isLargeRow}) {
  const [movie,setmovie]=useState([]);
  const [trUrl,settrUrl]=useState("");
  useEffect(() => {
    async function movietre(){
      const fiurl=await axios.get(fetchUrl);
      setmovie(fiurl.data.results);
      return 0;
    }movietre();
  }, [fetchUrl]);
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const trailerinitiate=(movier)=>{
    if(trUrl){
      settrUrl(false);
    }
    else{
      movieTrailer(movier?.title || movier?.name || movier?.original_name|| "" )
      .then(url=>{
      const urlParams = new URLSearchParams(new URL (url).search);
      settrUrl(urlParams.get('v'));
  }).catch(error=>console.log(error));

    }
  }
  return (
    <div className="row__container">
      <h2>{title}</h2>
      <div className="row__postirs">
        {movie.map((movier)=>
          <img key={movier.id} onClick={()=>trailerinitiate(movier)} className={`row__poste ${isLargeRow && "Originals"}`} src={`${base_url}${isLargeRow?movier.poster_path:movier.backdrop_path}`}/>)}
      </div>
      {trUrl &&<YouTube videoId={trUrl} opts={opts} />}
    </div>
  )
}

export default Row
