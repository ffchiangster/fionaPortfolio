import React from 'react';
var mathPic = require('../www/images/placeitmath3.jpg');

class Mathhelper extends React.Component {
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
      <div id="Mathhelper" className="projects">
        <img className="projectImg" id="MathPic" src={mathPic} />
        <h5> Math Helper </h5>
      </div>
    );
  }
}

export default Mathhelper;