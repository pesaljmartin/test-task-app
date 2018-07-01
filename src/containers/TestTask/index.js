import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getAllData } from '../../store/reducers/taskReducer'

import './index.css';

class TestTask extends Component {
  render() {
    return (
      <div className="TestTask">
        {console.log(this.props.allData)}
      </div>
    );
  }
}

const stateToProps = (state) => {
  return {
    allData: getAllData(state)
  };
};

export default connect(
  stateToProps,
)(TestTask);