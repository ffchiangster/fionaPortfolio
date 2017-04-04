import React from 'react';
import Linkedin from 'react-icons/lib/fa/linkedin';
import Github from 'react-icons/lib/fa/github';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.match === 'Profile' ? 'show' : 'hide'}>
        <h5>Greetings</h5>
        <div id="aboutMe">
          <a href="http://github.com/ffchiangster">
            <Github />
          </a>

          <a href="http://linkedin.com/in/ffchiang">
            <Linkedin />
          </a>
        </div>
      </div>
    );
  }
}

export default Profile;