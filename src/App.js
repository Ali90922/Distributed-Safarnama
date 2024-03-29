import React from 'react';
import './App.css';
import ImageComponent from './ImageComponent'; // Import the ImageComponent
import Navbar from './NavBar';


function Karimabad(){
  const imageUrl = "https://lh3.googleusercontent.com/drive-viewer/AKGpihbpCN-cfjwN8O_aqU12zJqyIRZwMTYa2bIZkmwsD1wqeau-o5qUFmh0NdFvO_buRM-O2j-1o4ryYnNAs-kEeycJKEGmKA=s1600";
  return (
    <div className="image-container">
        <img className="enlarged-image" src={imageUrl} alt="Mountain Image" />
        <div className="image-text2">KARIMABAD</div>
        <div className="date-text2">Sunday - Jun 27,2021 - 7:57 am Apple iPhone 11</div>
        <div className="date-text3">36.31967451049304, 74.66804419423514</div>

    </div>
  );
}



function App() {
  return (
    <div className="App" style={{ backgroundColor: '#f8f9f9' }}>
      <header className="App-header">
        {/* Replace the logo image with the ImageComponent */}
        <Navbar /> {/* Render the Navbar component */}
        
        <Karimabad/>

        <ImageComponent />
      </header>
    </div>
  );
}

export default App;
