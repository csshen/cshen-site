import React from 'react';
import { Link } from 'gatsby';
import { Row, Col } from 'antd';
import style from './postcard.module.css';

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';

const PostCard = ({title, description, excerpt, image, date, slug}) => {
  const img = image ? (<img src={image}/>) : null;
  const content = excerpt || lorem;
  return (
    <div>
      <div className={style.header}>
        <Link to={slug} id={style.title}>{ title }</Link>
        <span id={style.subtitle}>{ ' · ' + description }</span>
      </div>
      <p id={style.body}>{ content }</p>
      <Row className={style.footer}>
        <Col xs={12} id={style.date}>{ date }</Col>
        <Col xs={12} style={{textAlign: 'right'}}>
          <a className='lz'>[Demo]</a>{' '}
          <a className='lz'>[Source]</a>
        </Col>
      </Row>
    </div>
  );
}

export default PostCard;
