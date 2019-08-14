import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import WorldMap from '../components/worldmap';
import { Tabs, Tag } from 'antd';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
/*
This is the Travel Page
*/
class Travel extends Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return(
        <Layout location={this.props.location} title={siteTitle}>

        <h2>Places I've Lived</h2>

        <h2>Places I've Visited</h2>
        <Tabs defaultActiveKey='1' onChange={callback}>
          <TabPane tab='Europe' key='1'>
            <WorldMap continent='europe'/>
            <div>
              <Tag color="red">red</Tag>
            </div>
          </TabPane>
          <TabPane tab='Asia' key='2'>
            <WorldMap continent='asia'/>
          </TabPane>
          <TabPane tab='N. America' key='3'>
            Content of Tab Pane 3
          </TabPane>
          <TabPane tab='S. America' key='4'>
            Content of Tab Pane 4
          </TabPane>
        </Tabs>




        </Layout>
    );
  }
}

export default Travel;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
