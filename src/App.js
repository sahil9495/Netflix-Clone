import React from 'react';
import './App.css';
import Row from './Row';
import request from './request';
import Banner from './Banner';

function App() {
  return (
    <div className="app">
      <Banner />
      <Row title="NETFLIX ORIGINALS" isLargeRow fetchUrl={request.fetchNetflixOriginals}/>
      <Row title="Trending" fetchUrl={request.fetchTrending}/>
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies}/>
      <Row title="Documentry Movies" fetchUrl={request.fetchDocumentaries}/>
     
      We Will Rock Togather

    </div>
  );
}

export default App;
