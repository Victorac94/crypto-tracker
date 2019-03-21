import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as classes from './DetailsView.module.sass';
import Chart from '../Chart/MyChart';
import CoinDetails from '../../components/CoinDetails/CoinDetails';
import DetailsTitle from '../../components/DetailsTitle/DetailsTitle';

class DetailsView extends Component {
  render () {
    let coin = null;

    coin = this.props.topReducer.coins.find(c => c.CoinInfo.Name === this.props.detailsReducer.symbol);
    console.log(coin);

    return (
      <div>
        <div className={classes.goBackButton} onClick={this.props.hideDetails}>
          <img src={require("../../assets/Go Back.svg")} alt="go back icon" />
        </div>
        <DetailsTitle details={coin.CoinInfo} />
        <Chart details={this.props.detailsReducer.details}/>
        <CoinDetails details={coin.DISPLAY}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    detailsReducer: state.detailsReducer,
    topReducer: state.topReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsView);
