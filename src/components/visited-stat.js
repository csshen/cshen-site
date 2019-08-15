import React, { Component } from 'react';
import { Link } from 'gatsby';
import { Tag, Statistic, Row, Col } from 'antd';

class VisitedStat extends Component {
  render() {
    let v = this.props.visited;
    let stat = this.props.stat; // Countries, States, etc.
    let tags = [];

    v.forEach((x) => tags.push(
      <Tag><Link style={{ boxShadow: `none` }}>{x}</Link></Tag>
    ));

    return (
      <Row gutter={16}>
        <Col span={6}>
          <Statistic title={stat} value={v.length} />
        </Col>
        <Col span={18}>
          { tags }
        </Col>
      </Row>
    );
  }

}

export default VisitedStat;
