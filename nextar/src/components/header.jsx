import React from 'react';
import WallpaperSamples from './wallpaperSamples';





function Header() {
    return (
    
     <header   className="header">

      <div className="container">
        <h1 className="title">Mavel's Fearless</h1>
        <p className="subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. beatae
          molestias earum eveniet.
        </p>
        <div className="search-bar">
          <input type="search" placeholder="Search" />
        </div>
        <WallpaperSamples />
        </div>
        </header>
    );
}

export default Header;
