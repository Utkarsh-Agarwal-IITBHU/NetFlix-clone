

import requests from './request';
import axios from './axios';
import React,{ useEffect, useState } from 'react';
import "./Banner.css"

const base_url = "https://image.tmdb.org/t/p/original/";
function Banner() {
    const [movie,setmovie]=useState([]);
    const fetchUrl=requests.fetchTrending;
  useEffect(() => {
    async function movietre(){
      const fiurl=await axios.get(fetchUrl);
      let num=Math.floor(Math.random()*(fiurl.data.results.length-1));
      setmovie(fiurl.data.results[num]);
      return 0;
    }movietre();
  }, [fetchUrl]);
    return (
        <div className="banner_container" >
            <div className="banner_image" style={{backgroundSize:"cover",backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,backgroundPosition:"center center"}} >
                <div className="banner_contents">
                    <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
                    <div className="banner_buttons">
                        <button className="banner_button">Play</button>
                        <button className="banner_button">My List</button>
                    </div>
                    <div className="banner_description">
                        {movie?.overview}
                    </div>

                </div>
            <div className="coloriser"></div>
            </div>
        </div>            
    )
}

export default Banner

