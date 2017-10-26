import React, { Component } from 'react';
import { Row, Col, FormGroup, FormControl, InputGroup, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as Actions from '../actions';

class SearchBar extends Component {
  constructor(props) {
      super(props);

      this.state = { term: '' }
  }

  handleChange(value) {
    this.setState({ term: value });
  }

  handleClick() {
    this.props.fetchWeather(this.state.term)
    this.setState({ term: '' });
  }

  render() {
    return (
      <div className="search-bar">
        <Row>
          <Col xs={12}>
            <FormGroup>
              <InputGroup>
                <FormControl
                  ref="search"
                  type="text"
                  placeholder="Get five-day forecast in your favourite cities"
                  value={this.state.term}
                  onChange={event => this.handleChange(event.target.value)}
                />
                <InputGroup.Button>
                <Button bsStyle="primary" onClick={() => this.handleClick()}>
                  Summit
                </Button>
                </InputGroup.Button>
              </InputGroup>
            </FormGroup>
          </Col>
        </Row>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( { fetchWeather: Actions.fetchWeather }, dispatch );
}

export default connect(null, mapDispatchToProps)(SearchBar);
