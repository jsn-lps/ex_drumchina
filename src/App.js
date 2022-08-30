import React from 'react';
import './App.css';


function DrumMachine() {
  return (
        <DrumMachina />
  );
}


class DrumMachina extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayText: "Play a",
      Q: {link: "https://www.myinstants.com/media/sounds/anime-wow-sound-effect.mp3", name: "anime-wow"},
      W: {link: "https://www.myinstants.com/media/sounds/erro.mp3", name: "error"},
      E: {link: "https://www.myinstants.com/media/sounds/dam4rqxu2ywicjk1.mp3",name: "idr"},
      A: {link: "https://www.myinstants.com/media/sounds/nut_ZKo5FA9.mp3",name: "nut"},
      S: {link: "https://www.myinstants.com/media/sounds/discord-notification.mp3",name: "discord"},
      D: {link: "https://www.myinstants.com/media/sounds/fart-with-reverb.mp3",name: "fart with reverb"},
      Z: {link: "https://www.myinstants.com/media/sounds/movie_1.mp3",name: "movie"},
      X: {link: "https://www.myinstants.com/media/sounds/taco-bell-bong-sfx.mp3",name: "taco bong"},
      C: {link: "https://www.myinstants.com/media/sounds/vine-boom.mp3", name: "vine boom"}
    }
    this.playSound = this.playSound.bind(this)

  }
  
  playSound(event) {
    let letter = event.key.toUpperCase();
      if (document.getElementById(letter)) {
        this.setAndPlay(letter);
      }
  }
  
  clickSound(letter) {
    this.setAndPlay(letter);
  }

  setAndPlay(letter) {
    let id = document.getElementById(letter);
    id.play();
    this.setState(i => ({
      displayText: id.title
    }))
  }

  componentDidMount() {
      document.addEventListener('keydown', this.playSound) 
    }

  render() {
    return (
      <div id="drum-machine">
      <div id="displayRight">
      <div id="buttons">
        
      <button onClick={()=> this.clickSound("Q")} id={this.state.Q} className="drum-pad">Q
        <audio id="Q" className="clip" src={this.state.Q.link} title={this.state.Q.name}/>
        </button>

      <button onClick={()=> this.clickSound("W")} id={this.state.W} className="drum-pad">W
        <audio id="W" className="clip" src={this.state.W.link} title={this.state.W.name} />  
        </button>

      <button onClick={()=> this.clickSound("E")} id={this.state.E} className="drum-pad">E
        <audio id="E" className="clip" src={this.state.E.link} title={this.state.E.name} />  
        </button>

      <button onClick={()=> this.clickSound("A")} id={this.state.A} className="drum-pad">A
        <audio id="A" className="clip" src={this.state.A.link} title={this.state.A.name} />  
        </button>

      <button onClick={()=> this.clickSound("S")} id={this.state.S} className="drum-pad">S
        <audio id="S" className="clip" src={this.state.S.link} title={this.state.S.name} />  
        </button>

      <button onClick={()=> this.clickSound("D")} id={this.state.D} className="drum-pad">D
        <audio id="D" className="clip" src={this.state.D.link} title={this.state.D.name} />  
        </button>

      <button onClick={()=> this.clickSound("Z")} id={this.state.Z} className="drum-pad">Z
        <audio id="Z" className="clip" src={this.state.Z.link} title={this.state.Z.name} />  
        </button>

      <button onClick={()=> this.clickSound("X")} id={this.state.X} className="drum-pad">X
        <audio id="X" className="clip" src={this.state.X.link} title={this.state.X.name} />  
        </button>

      <button onClick={()=> this.clickSound("C")} id={this.state.C} className="drum-pad">C
        <audio id="C" className="clip" src={this.state.C.link} title={this.state.C.name} />  
        </button>
      </div>
      <div id="spacerBar"></div>
      <div id="display">
        {this.state.displayText.toString()}
      </div>
      
      </div>
    </div>
    )
  }
}



export default DrumMachine;
