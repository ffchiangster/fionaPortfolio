import React from 'react';
var xyclonePic = require('../www/images/Xyclonephotopreview.jpg');

class Xyclone extends React.Component {
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
      <div id="Xyclone" className="projects">
        <img className="projectImg" id="xyclonePic" src={xyclonePic} />
        <h5> Xyclone </h5>
      </div>
    );
  }
}

export default Xyclone;