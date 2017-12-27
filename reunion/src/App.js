import React, { Component } from 'react';
import steer from './Steer2.jpg';
import './App.css';
// import Login from "./components/login.js"
import Registration from "./components/Registration.js"
import AudioPlayer from 'react-responsive-audio-player';


var playlist =
  [{ url: '../../../public/01_Cat_Scratch_Fever.mp3',
     displayText: 'Cat Scratch Fever' },
   { url: '../../../public/01_Cat_Scratch_Fever.mp3',
     displayText: 'Cat Scratch Fever 2' }];



class App extends Component {
  render() {
    return (
      <div className="App"> 
         <div id="audio_player_container">
            <AudioPlayer style={{ position: 'fixed', bottom: 0 }}
            playlist={playlist} 
            cycle={true}
            autoplay={true}
          />
         </div > 




        <header className="App-header">
          
          <h1 className="App-title">Farwell Class of 78</h1>
          
        </header>
        <div className="App-intro">
        Welcome
        </div>
        <img src={steer} className="App-logo" alt="logo" />
        <div>
      
        </div>
        <Registration />
      
     

        
            
      </div>

    );
  }
}

export default App;
