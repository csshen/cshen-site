import React, { Component } from 'react';
import { Icon, Divider, Typography } from 'antd';

const { Paragraph, Title } = Typography;

class Profile extends Component {
  render() {
    const config = [
      { icon: 'github', text: 'GitHub', url: 'https://github.com/csshen' },
      { icon: 'instagram', text: 'Instagram', url: 'https://www.instagram.com/chrissshen/' },
      { icon: 'youtube', text: 'YouTube', url: 'https://www.youtube.com/user/CrateNinja/videos' },
      { icon: 'linkedin', text: 'LinkedIn', url: 'https://www.linkedin.com/in/christopher-shen-aa780912b/'}
    ];

    const items = config.map((media) =>
      <div>
        <Icon type={media.icon} />
        <Divider type='vertical' />
        <a href={media.url} className='links'>{ media.text }</a>
      </div>
    );

    return (
      <>
        <Divider orientation='left'>get in touch <Icon type="arrow-down" /></Divider>
        { items }
        <Paragraph copyable={{text: 'hello@chrisshen.co'}} style={{margin: 0}}>
          <Icon type='mail'/>
          <Divider type='vertical' />
          hello@chrisshen.co
        </Paragraph>
      </>
    );
  }
}

export default Profile;
