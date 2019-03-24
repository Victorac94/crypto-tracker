import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as classes from './DetailsView.module.sass';
import Chart from '../Chart/MyChart';
import CoinDetails from '../../components/CoinDetails/CoinDetails';
import DetailsTitle from '../../components/DetailsTitle/DetailsTitle';

class DetailsView extends Component {
  render () {
    let coin = null;
    let fullDataR = this.props.coinFullDataReducer;

    if (fullDataR.fullData) {
      coin = fullDataR.fullData.DISPLAY[fullDataR.symbol];
    }

    console.log(coin);

    return (
      <div>
        <div className={classes.goBackButton} onClick={this.props.hideDetails}>
          <img src={require("../../assets/Go Back.svg")} alt="go back icon" />
        </div>
        <DetailsTitle fullData={coin} fullName={fullDataR.fullName}/>
        <Chart history={this.props.coinHistoryReducer.history}/>
        <CoinDetails details={coin.USD}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    topReducer: state.topReducer,
    coinHistoryReducer: state.coinHistoryReducer,
    coinFullDataReducer: state.coinFullDataReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsView);
