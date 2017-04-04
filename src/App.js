import React from 'react';
import Profile from './Profile';
import Projects from './Projects';
import Contact from './Contact';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {match: 'Profile'};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({
      match: e.target.id,
    });
  }

  render() {
    return (
      <div>
        <div>
          <img id="profileBg" src="https://68.media.tumblr.com/ea9a382980c9aba40a57fac92252f298/tumblr_o1tz0yYJD51txt22yo1_500.gif"/>
          <span id="overlayText">Fiona Chiang</span>
          <div>

          </div>
        </div>

        <div id="appWrap">
          <h3 id="Profile" onClick={this.handleClick}> About Me </h3>
          <h3 id="Projects" onClick={this.handleClick}> Projects </h3>
          <h3 id="Contact" onClick={this.handleClick}> Say Hi! </h3>
        </div> 

        <div>
          <Profile match={this.state.match}/>
          <Projects match={this.state.match}/>
          <Contact match={this.state.match}/>
        </div>
      </div>
    );
  }
}

export default App;