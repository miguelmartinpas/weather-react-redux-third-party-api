import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

import Chart from '../components/chart.jsx'

import './weather-list.less';

class WeatherList extends Component {
  renderWeather(cityData) {
    const tems = cityData.list.map(weather => weather.main.temp - 273.15);
    const preassures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);

    return (
      <Row className="line" ref={cityData.city.name}>
        <Col xs={2}><div className="city">{cityData.city.name}</div></Col>
        <Col xs={3}><Chart data={tems} color="orange" unit="º C"/></Col>
        <Col xs={3}><Chart data={preassures} color="green" unit="hPa"/></Col>
        <Col xs={3}><Chart data={humidities} color="black" unit="%"/></Col>
      </Row>
    );
  }
  render() {
    return (
      <div className="weather-list">
        <Grid>
          <Row className="header">
            <Col xs={2}>City</Col>
            <Col xs={3}>Temperature (C)</Col>
            <Col xs={3}>Pressure (hPa)</Col>
            <Col xs={3}>Humidity (%)</Col>
          </Row>
          <Row>
            {this.props.weather.map(this.renderWeather)}
          </Row>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { weather: state.weather };
}

export default connect(mapStateToProps)(WeatherList);
