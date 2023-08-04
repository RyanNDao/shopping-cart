import { useState } from 'react'
import emporium1 from './assets/emporium-1.jpg';
import emporium2 from './assets/emporium-2.jpeg';
import emporium3 from './assets/emporium-3.jpg';
import emporium4 from './assets/emporium-4.jpg';

export function Home() {

  return (
    <div className="homepage">
      <h1>Welcome to Ryan&apos;s Emporium Decorium</h1>
      <div className="photos-left">
        <img src={emporium1}></img>
        <img src={emporium2}></img>
      </div>
      <div className="homepage-summary">
        <h3>
          Explore our large selection of goodies! Specially selected by Ryan.
          This is the biggest emporium in the United States, so there will be something that will catch your eye!
        </h3>
      </div>
      <div className="photos-right">
        <img src={emporium3}></img>
        <img src={emporium4}></img>
      </div>
    </div>
  )
}