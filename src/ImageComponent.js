import React from 'react';
import './App.css'; // Import the CSS file

function ImageComponent() {
  const imageUrl = "https://lh3.googleusercontent.com/drive-viewer/AKGpihZ2r0HaMPMoA3D63r75rNmPnKo2dXQVh3hyLjh_aK6CRc88cmw68zYMbMijMBFlIN-XN5tKEQL4iZrYMDmVzyNesG9RVA=s1600";

  return (
    <div className="image-container">
        <img className="enlarged-image" src={imageUrl} alt="Mountain Image" />
        <div className="image-text">ننگا پربت</div>
        <div className="date-text">Saturday - June 26 - 2021 - 7:14 PM  Apple iPhone 11</div>
        <div className="date-text4">35.237499, 74.589165</div>
    </div>
  );
}

export default ImageComponent;
