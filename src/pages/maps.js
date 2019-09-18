import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

import WorldMap from '../components/world-map';
import USMap from '../components/us-map';
import NYMap from '../components/ny-map';
import VisitedStat from '../components/visited-stat';
import visited from '../config/map-metadata';

import { Tabs, Tag, Statistic, Row, Col,
         Typography, Divider, Carousel, Icon } from 'antd';
import 'antd/dist/antd.css';

const { Title, Paragraph, Text } = Typography;
const { TabPane } = Tabs;

/*
This is the Travel Page
*/
class Maps extends Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return(
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title='Maps' />
        <Title level={2}><Icon type='pushpin' /> Maps</Title>

        <Carousel autoplay style={{marginBottom: '1em' }}>
          <div>
            <Text>
              “I've always been fascinated by maps and cartography.
              A map tells you where you've been, where you are,
              and where you're going ― in a sense it's three tenses in one.”
            </Text>
            <br/>
            <Text style={{float: 'right'}}>― Peter Greenaway</Text>
          </div>
          <div>
            <Text>
              “A map is the greatest of all epic poems.
              Its lines and colors show the realization of great dreams.”
            </Text>
            <br/>
            <Text style={{float: 'right'}}>― Gilbert H. Grosvenor</Text>
          </div>
          <div>
            <Text>
              “It's really useful to travel, if you want to see new things.”
            </Text>
            <br/>
            <Text style={{float: 'right'}}>― Jules Verne, Around the World in Eighty Days</Text>
          </div>
        </Carousel>

        <Title level={3}>Where I'm From</Title>

        <Divider>
          <Link className='grey-link'>
            <Icon type='pushpin' /> Long Island, New York
          </Link>
        </Divider>
        <NYMap color={['#F09D51', '#DB8F4A']}/>

        <Title level={3}>Where I've Lived</Title>
        <Divider>
          <Link className='grey-link'><Icon type='pushpin' /> New York</Link>
          <Divider type='vertical' />
          <Link className='grey-link'><Icon type='pushpin' /> Atlanta</Link>
          <Divider type='vertical' />
          <Link className='grey-link'><Icon type='pushpin' /> Los Angeles</Link>
        </Divider>
        <USMap showMarkers color={['#D7C0D0', '#C4AFBE']}/>

        <Title level={3}>Where I've Been</Title>
        <Divider>
          <Link className='grey-link'>
            <Icon type='pushpin' /> United States
          </Link>
        </Divider>
        <USMap visited={visited.us_states} color={['#D7C0D0', '#C4AFBE']} />
        <VisitedStat visited={visited.us_states} stat='States'/>
        <Divider>
          <Link className='grey-link'>
            <Icon type='pushpin' /> North America
          </Link>
        </Divider>
        <WorldMap continent='northAmerica' color={['#3DD6D0', '#38C3BE']} />
        <VisitedStat visited={visited.north_america} stat='Countries'/>
        <Divider>
          <Link className='grey-link'>
            <Icon type='pushpin' /> South America
          </Link>
        </Divider>
        <WorldMap continent='southAmerica' color={['#EF476F', '#DA4165']} />
        <VisitedStat visited={visited.south_america} stat='Countries'/>
        <Divider>
          <Link className='grey-link'>
            <Icon type='pushpin' /> Europe
          </Link>
        </Divider>
        <WorldMap continent='europe' color={['#FFD166', '#E8BE5D']} />
        <VisitedStat visited={visited.europe} stat='Countries'/>
        <Divider>
          <Link className='grey-link'>
            <Icon type='pushpin' /> Asia
          </Link>
        </Divider>
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
