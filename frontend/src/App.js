import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
 
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value:80,
      density: {
        enable: true,
        value_area: 600
      }
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "resize": true
    },
    "modes": {
      "bubble": {
        "distance": 400,
        "size": 4,
        "duration": 2,
        "opacity": 0.8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.8
      }
    }
  }
};
const initialState = {
  input: '',
  imageUrl: '',
  box: [],
  route : 'signIn',
  isSignedIn: false,
  user: {
      id: '',
      name:'',
      email: '',
      entries: 0,
      joined: ''
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    const { id, name, email, entries, joined } = data;
    this.setState({user:{
      id,
      name,
      email,
      entries,
      joined
    }})
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions;
    const boxes = [];
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    clarifaiFace.forEach(region => { 
      boxes.push({
        leftCol: region.region_info.bounding_box.left_col * width,
        topRow: region.region_info.bounding_box.top_row * height,
        rightCol: width - region.region_info.bounding_box.right_col * width,
        bottomRow: height - region.region_info.bounding_box.bottom_row * height
      })
    });
    return boxes;
  }

  displayFaceBox  = (box) => {
    this.setState({ box:box })
  }

  onInputChange = (event) => {
      this.setState({ input: event.target.value });
    };

  onPictureSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    fetch('http://localhost:3333/imageurl', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
          input: this.state.input
      })
    })
    .then(response => response.json())
    .then(response => {
      if(response){
        fetch('http://localhost:3333/image', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
              id: this.state.user.id
          })
      })
      .then(response => response.json())
      .then(count => {
        this.setState(Object.assign(this.state.user,{ entries: count }))
      })
      .catch(console.log);
    }   
      this.displayFaceBox(this.calculateFaceLocation(response))
    })
      .catch(err => console.log(err))
    };

  onRouteChange = (route) => {
    if (route === 'signOut'){
      this.setState(initialState);
    } else if ( route === 'home'){
      this.setState({isSignedIn: true});
    }
    this.setState({route: route});
  }

  render() {
    const {isSignedIn, imageUrl, route, box } = this.state;
    return (
      <div className="App">
        <Particles className='particles' params={particlesOptions}/>
        <Navigation isSignedIn={isSignedIn} onRouteChange = {this.onRouteChange} />
        { route === 'home'    
          ? <div>
              <Logo />
              <Rank name = {this.state.user.name} entries = {this.state.user.entries} />
              <ImageLinkForm 
                onInputChange={this.onInputChange} 
                onPictureSubmit={this.onPictureSubmit}
              />
              <FaceRecognition box={box} imageUrl={imageUrl}/>
            </div>
          
          : (
              route === 'signIn' ?
              <SignIn loadUser = {this.loadUser} onRouteChange = {this.onRouteChange} /> 
              : <Register loadUser = {this.loadUser} onRouteChange = {this.onRouteChange}/>
            )
        }
        </div>
    );
  } 
} 


export default App;
