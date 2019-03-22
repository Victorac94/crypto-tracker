import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import axios from 'axios';

import * as classes from './App.module.sass';
import './shared/spinner.css';
import MainTitle from './components/MainTitle/MainTitle';
import CurrenciesList from './components/CurrenciesList/CurrenciesList';
import DetailsView from './containers/DetailsView/DetailsView';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import './App.module.sass';
import * as fetchDataActions from './store/actions/fetchDataActions';
import * as fetchDetailsActions from './store/actions/fetchDetailsActions';
import * as generalActions from './store/actions/generalActions';

class App extends Component {

constructor(props) {
  super(props);
  this.state = {
    showingDetails: false,
    shouldRenderDetails: false
  }
  let winWidth = 0;
}

loadDetails = e => {
  const symbol = e.currentTarget.dataset.name;
  const scroll = document.documentElement.scrollTop;
  const detailsWrapper = document.querySelector("#detailsViewWrapper");

  // If desktop or tablet (landscape)
  if (this.winWidth < 769) {
    detailsWrapper.style.transform = "translateX(-100%)";
  } else {
    this.shouldRenderDetailsTrue();
  }

  this.showingDetailsTrue();
  this.props.onFetchCoinDetails(symbol);
  this.props.onSaveScrollPosition(scroll);
}

hideDetails = () => {
  const list = document.querySelector(".currenciesList");
  const detailsWrapper = document.querySelector("#detailsViewWrapper");

  // If desktop or tablet (landscape)
  if (this.winWidth < 769) {
    list.style.display = "block";
    detailsWrapper.style.transform = "translateX(0)";
  } else {
    this.shouldRenderDetailsFalse();
  }

  document.documentElement.scrollTop = document.body.scrollTop = this.props.generalReducer.scroll;
  this.showingDetailsFalse();
}

getWinWidth = () => {
  this.winWidth = window.innerWidth;
  console.log(this.winWidth);
}

showingDetailsTrue = () => {
  this.setState(() => {return {showingDetails: true}})
}

showingDetailsFalse = () => {
  this.setState(() => {return {showingDetails: false}})
}

shouldRenderDetailsTrue = () => {
  this.setState(prevState => {
    return {
      shouldRenderDetails: true
    }
  })
}

shouldRenderDetailsFalse = () => {
  this.setState(prevState => {
    return {
      shouldRenderDetails: false
    }
  })
}

componentDidMount() {
  const detailsView = document.querySelector("#detailsViewWrapper");

  this.props.onFetchTopVolume24();
  this.getWinWidth();

  window.addEventListener("resize", () => {
    this.getWinWidth();
    if (this.state.shouldRenderDetails && this.winWidth < 768) {
      this.shouldRenderDetailsFalse();
      document.querySelector("#detailsViewWrapper").style.transform = "translateX(-100%)";
    }
  });
  detailsView.addEventListener("transitionend", () => {
    if (this.state.shouldRenderDetails) {
      this.shouldRenderDetailsFalse();
    } else {
      const list = document.querySelector(".currenciesList");

      // Al esconder la lista de monedas nos permite que no haga scroll en el div
      // de abajo (o sea, en la lista de monedas) y tambien nos permite que la barra
      // del navegador se esconda y aparezca al hacer scroll en el detailsView.
      list.style.display = "none";
      this.shouldRenderDetailsTrue();
    }
  });

  console.log(this.props);
}

  render() {
    let myCards = null;
    let myCoins = [];
    let showList = null;
    let detailsSection = null;
    let {fetching, newDetails, symbol} = this.props.detailsReducer;

    // If there was an error fetching Top coins data
    if (this.props.topReducer.error) {
      showList = <ErrorMessage error={this.props.generalReducer.error}/>;
    }
    // Else if there's no error and we have fetched Top Coins data
    else if (this.props.topReducer.coins) {
      this.props.topReducer.coins.forEach(c => {
          myCoins.push([c.CoinInfo.Name, c.CoinInfo.FullName, c.DISPLAY.USD.PRICE, c.CoinInfo.ImageUrl, c.DISPLAY.USD.CHANGEPCT24HOUR]);
        });

      myCards = myCoins.map(c => {
        return (
          <Card
            loadDetails={(e) => this.loadDetails(e)}
            name={c[0]}
            fullName={c[1]}
            price={c[2]}
            imgUrl={c[3]}
            changePct24Hour={c[4]}
            key={c[0]}/>
        )
      })

    showList = <CurrenciesList currencies={myCards}/>;
    }

    if (fetching || (newDetails && !this.state.shouldRenderDetails)) {
      detailsSection = <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    } else if (newDetails && symbol && this.state.shouldRenderDetails) {
      detailsSection = (
        <DetailsView
          showingDetails={this.state.showingDetails}
          hideDetails={this.hideDetails}
          shouldRenderDetails={this.state.shouldRenderDetails}/>
      )
    } else if (this.winWidth > 768) {
      detailsSection = <h2 className={classes.placeholderDesktop}>Please select a currency...</h2>
    }

    return (
      <div className={classes.App}>
        <MainTitle title="Top List by Volume 24h"/>
        {showList ? showList : <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>}
        <div id="detailsViewWrapper" className={classes.detailsViewWrapper}>
          {detailsSection}
        </div>
        <Header />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    topReducer: state.topReducer,
    detailsReducer: state.detailsReducer,
    generalReducer: state.generalReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchTopVolume24: () => dispatch(fetchDataActions.fetchTopVolume24()),
    onFetchCoinDetails: (symbol) => dispatch(fetchDetailsActions.fetchDetails(symbol)),
    onSaveScrollPosition: scroll => dispatch(generalActions.saveScrollPosition(scroll))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
