import React from 'react';
var boopPic = require('../www/images/boopPic.jpg');

class Boop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  clickHandler(e) {
    this.setState({
      expanded: !this.state.expanded
    });
  }

  render() {
    return ( 
      <div style={{flex: this.state.expanded ? 4 : 1}} onClick={this.clickHandler.bind(this)} id="Boop" className="projects">
        <h5 style={{transform: this.state.expanded ? 'translateY(0px)' : 'translateY(-500px)'}} className='projectMove title'> Boop! </h5>
        <img className="projectImg" id="BoopPic" src={boopPic} />
        <div style={{transform: this.state.expanded ? 'translateY(0px)' : 'translateY(500px)'}}
        className='projectMove blurb'>Blurb</div>
      </div>
    );
  }
}

export default Boop;