import React, {Component} from 'react';
import Particles from 'react-particles-js';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import 'tachyons';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';

const particleOptions = {
  particles: {
      number: {
          value: 160,
          density:{
            enable: true,
            value_area: 800,
          }
      },
      size: {
          value: 3
      }
  },
  interactivity: {
      events: {
          onhover: {
              enable: true,
              mode: "repulse"
          }
      }
  
}}

class App extends Component {

  constructor(){
super ();
  this.state= {
    input: '',
}
  }
  onInputChange =(event)=> {
    console.log(event.target.value);
  }
  render(){
  return (
    <div className="App">
    <Particles className="particles"
    params= {particleOptions}/>
      <Navigation />
      <Logo />
      <Rank />
       <ImageLinkForm onInputChange={this.onInputChange}/>
      {/* <FaceRecognition /> */}
    </div>
  );
}
}

export default App;

// www.ibtm-models.com/wp-content/uploads/2019/12/xanthe.jpg