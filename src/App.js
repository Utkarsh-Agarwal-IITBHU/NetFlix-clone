import React from 'react';
import Row from './Row.js';
import './App.css';
import request from './request.js';
import Banner from './Banner.js'
import Nav from './Nav.js'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/> 
    <Row title="NETFLIX ORIGINALS" fetchUrl={request.fetchMystery} isLargeRow/>
    <Row title="Trending Now" fetchUrl={request.fetchTrending} />
    <Row title="Top Rated" fetchUrl={request.fetchTopRated}/>
    <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies}/>
    <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies}/>
    <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies}/>
    <Row title="Documentaries" fetchUrl={request.fetchSciFi}/>
    <Row title="Action Movies" fetchUrl={request.fetchActionMovies}/>
    </div>
  );
}

export default App;
