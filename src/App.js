import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <div className="App">
        <header className="App-header">
          <img src="https://vignette.wikia.nocookie.net/webkinz/images/8/81/Stop_sign.png/revision/latest?cb=20130528212335" className="App-logo" alt="logo" />
          <h1 className="App-title">Dataset of Over 3000 U.S. Stop Signs</h1>
        </header>
      </div>
      <div class="container App-intro" style={{marginTop: 2+'em'}}>
        <h1>Stop Sign Data Set</h1><hr/>
        <h4>Rodrigo Gomez-Palacio, Adolfo Portilla</h4>
        <p>Texas A&M University - 2018</p>
        <a href=""><button className="btn download-btn">Download zip</button></a><hr/>
      </div>
      <div class="container" style={{marginTop: 2+'em'}}>
        <h5><strong>Goal:</strong></h5>
        We want to provide hobbyists, researchers, and students with access to a data set of stop signs for use in machine learning or any other non-commercial purpose.
      </div>
      <div class="container" style={{marginTop: 2+'em'}}>
        <h5><strong>Source:</strong></h5>
        Image data comes from Google Street View photos that were assembled using the Google Street View API.
      </div>
      <div class="container" style={{marginTop: 2+'em'}}>
        <h5><strong>Collection Method:</strong></h5>
        Our data collection strategy involved several steps:
        <ul>
          <li>First we identified coordinates of straight streets. We found that straight streets were better suited to our collection process.</li>
          <li>Next, we used the Google Street View API to capture images every x meters.</li>
          <li>We then ran every image through our image-processing algorithm built using OpenCV. Using color filtering, we constructed contours around red-colored objects. The algorithm cropped these contours and saved them to a directory.</li>
          <li>We then eliminated false positives manually.</li>
          <li>After accumulating a big enough data set, we trained a neural net to perform the previous step automatically, further adding to the set.</li>
        </ul><hr/>
        <a href=""><button className="btn download-btn">Download zip</button></a><br/><hr/>

        <strong style={{color: '#4E4773'}}>DISCLAIMER:</strong><p> This data set is meant for personal use or research purposes and should never be used for commercial purposes whatsoever.</p><br/>
      </div>
    </div>
    );
  }
}

export default App;
