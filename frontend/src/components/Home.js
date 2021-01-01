import React from 'react';
import TitleList from "./TitleList";
import "./Home.css"

function Home() {
  return (
    <main>
      <p className="home-c">
        Welcome to <b>CyberTech Blog</b>, our innovative site for communicating
        on the information superhighway.
      </p>
      <TitleList />
    </main>
  );
}

export default Home;