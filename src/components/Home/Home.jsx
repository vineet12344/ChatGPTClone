import React from 'react'
import NavBar from '../NavBar/NavBar';
import Hero from '../Hero/Hero';

function Home() {
  return (
    <>
      <div className="w-[100-vw] h-[100vh] bg-zinc-900 ">
        <NavBar />
        <Hero />
        
      </div>
    </>
  );
}

export default Home
