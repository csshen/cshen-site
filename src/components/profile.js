import React, { Component } from 'react';
import { Icon, Divider, Typography, Tooltip } from 'antd';

const { Paragraph, Title } = Typography;

class Profile extends Component {
  render() {
    const config = [
      { icon: 'github', text: 'GitHub', url: 'https://github.com/csshen' },
      { icon: 'instagram', text: 'Instagram', url: 'https://www.instagram.com/chrissshen/' },
      { icon: 'youtube', text: 'YouTube', url: 'https://www.youtube.com/user/CrateNinja/videos' },
      { icon: 'linkedin', text: 'LinkedIn', url: 'https://www.linkedin.com/in/christopher-shen-aa780912b/'},
      { icon: 'mail', text: 'Email', url: 'mailto:hello@chrisshen.co?Subject=Hello'}
    ];

    return (
      <div>
        {config.map((media) =>
          <span >
            <Tooltip title={media.text}>
            <a href={media.url} className='icon-link'>
              <Icon type={media.icon} />
            </a>
            </Tooltip>
            &ensp;&ensp;
          </span>
        )}
      </div>
    );
  }
}

export default Profile;
