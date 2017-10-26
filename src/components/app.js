import React, { Component } from 'react';
import { PanelGroup, Panel, Row, Col, Image } from 'react-bootstrap';

import SearchBar from '../containers/search-bar.jsx';
import EpisodesList from '../containers/weather-list.jsx';

import './app.less';

export default class App extends Component {
  render() {
    return (
      <div className="weather-app">
        <PanelGroup>
          <Panel>
            <Row>
              <Col xs={1}>
                <Image src="./assets/logo.png" className="logo" responsive />
              </Col>
              <Col xs={11}>
                <SearchBar></SearchBar>
              </Col>
            </Row>
          </Panel>
          <Panel>
            <EpisodesList></EpisodesList>
          </Panel>
        </PanelGroup>
      </div>
    );
  }
}
