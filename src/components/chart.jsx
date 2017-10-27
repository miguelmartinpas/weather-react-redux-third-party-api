import _ from 'lodash';
import React, { Component } from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

class Chart extends Component {
  average(data) {
    return _.round(_.sum(data)/data.length);
  }

  render() {
    return (
      <Sparklines data={this.props.data} width={120} height={50}>
        <SparklinesLine color={this.props.color} />
        <SparklinesReferenceLine type="avg" />
        <div className="avg">{this.average(this.props.data)} {this.props.unit}</div>
      </Sparklines>
    );
  }
}

export default Chart;
