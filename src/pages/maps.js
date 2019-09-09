import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

import WorldMap from '../components/world-map';
import USMap from '../components/us-map';
import NYMap from '../components/ny-map';
import VisitedStat from '../components/visited-stat';

import { Tabs, Tag, Statistic, Row, Col } from 'antd';
import { Typography, Divider } from 'antd';

import visited from '../config/map-metadata';
import 'antd/dist/antd.css';
const { Title, Paragraph, Text } = Typography;
const { TabPane } = Tabs;

/*
This is the Travel Page
*/
class Maps extends Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return(
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Maps" />
        <Title>Maps</Title>
        <Text>
          Learn more about me through these 7 maps.
        </Text>

        <Title level={3}>Where I'm From</Title>
        <Divider>Long Island, New York</Divider>
        <NYMap color={['#F09D51', '#DB8F4A']}/>

        <Title level={3}>Where I've Lived</Title>
        <USMap showMarkers color={['#D7C0D0', '#C4AFBE']}/>
        <VisitedStat visited={visited.us_cities} stat='Cities'/>

        <Title level={3}>Where I've Visited</Title>
        <Divider>United States</Divider>
        <USMap visited={visited.us_states} color={['#D7C0D0', '#C4AFBE']} />
        <VisitedStat visited={visited.us_states} stat='States'/>
        <Divider>North America</Divider>
        <WorldMap continent='northAmerica' color={['#3DD6D0', '#38C3BE']} />
        <VisitedStat visited={visited.north_america} stat='Countries'/>
        <Divider>South America</Divider>
        <WorldMap continent='southAmerica' color={['#EF476F', '#DA4165']} />
        <VisitedStat visited={visited.south_america} stat='Countries'/>
        <Divider>Europe</Divider>
        <WorldMap continent='europe' color={['#FFD166', '#E8BE5D']} />
        <VisitedStat visited={visited.europe} stat='Countries'/>
        <Divider>Asia</Divider>
        <WorldMap continent='asia' color={['#06D6A0', '#06C392']} />
        <VisitedStat visited={visited.asia} stat='Countries'/>

      </Layout>
    );
  }
}

export default Maps;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
