import React from 'react';
import Boop from './Boop';
import Mathhelper from './Mathhelper';
import Xyclone from './Xyclone';

class Projects extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className={this.props.match === 'Projects' ? 'show' : 'hide'}>
          <h5>My Projects</h5>
            <div id="projectWrap">
              <Xyclone />
              <Boop/>
              <Mathhelper />
            </div>
        </div>
      </div>
    );
  }
}

export default Projects;