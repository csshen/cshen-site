import React, { Component } from 'react';
import { Icon, Divider } from 'antd';

class Profile extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center', margin: '1em' }}>
        <a href='https://github.com/csshen' className='icon-link'>
          <Icon type='github' className='icon-up' />
        </a>
        <Divider type='vertical' />
        <a href='https://www.instagram.com/chrissshen/' className='icon-link'>
          <Icon type='instagram' className='icon-up' />
        </a>
        <Divider type='vertical' />
        <a href='https://www.youtube.com/user/CrateNinja/videos' className='icon-link'>
          <Icon type='youtube' className='icon-up' />
        </a>
        <Divider type='vertical' />
        <a href='https://www.linkedin.com/in/christopher-shen-aa780912b/' className='icon-link'>
          <Icon type='linkedin' className='icon-up' />
        </a>
        <Divider type='vertical' />
        <a href='mailto:chrisshen8@gmail.com' className='icon-link'>
          <Icon type='mail' className='icon-up' />
        </a>
      </div>
    );
  }
}

export default Profile;
