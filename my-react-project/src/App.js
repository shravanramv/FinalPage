import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="content">
        <h2>Process Complete!</h2>
        <h1>Final Image</h1>
        <p>Thank you for using ShiftShade!</p>
        <div className="image-placeholder">
          Image without background
        </div>
        <div className="button-group">
          <button className="action-button" onClick={handleDoAnotherImage}>
            Do for another image
          </button>
          <button className="action-button" onClick={handleDownloadImage}>
            Download image as jpg
          </button>
        </div>
      </div>
    </div>
  );
}

function handleDoAnotherImage() {
  // Handle the logic for processing another image
  console.log("Do for another image clicked");
}

function handleDownloadImage() {
  // Handle the logic for downloading the image
  console.log("Download image as jpg clicked");
}

export default App;
