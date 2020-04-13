import React from 'react';
import { Link, graphql } from 'gatsby';
import { Row, Col } from 'antd';
import * as Icon from 'react-feather';

import style from './index2.module.css';

import Sidebar from '../components/sidebar';
import SLayout from '../components/slayout';

const Index2 = ({ data, location }) => {
  let x = (<div className={style.box} style={{width: 'auto', backgroundColor: 'red', margin: 16}} />);

  return (
    <SLayout location={location.pathname}>
      <Row>
        <Col sm={12} md={8} lg={6}>{x}</Col>
        <Col sm={12} md={8} lg={6}>{x}</Col>
        <Col sm={12} md={8} lg={6}>{x}</Col>
        <Col sm={12} md={8} lg={6}>{x}</Col>
        <Col sm={12} md={8} lg={6}>{x}</Col>
        <Col sm={12} md={8} lg={6}>{x}</Col>
        <Col sm={12} md={8} lg={6}>{x}</Col>
        <Col sm={12} md={8} lg={6}>{x}</Col>
        <Col sm={12} md={8} lg={6}>{x}</Col>
      </Row>
    </SLayout>
  );
}

export default Index2;
