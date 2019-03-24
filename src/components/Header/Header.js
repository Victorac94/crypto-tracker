import React from 'react';

import * as classes from './Header.module.sass';

const header = props => {
  let searchListCoins = null;

  if (props.searchList) {
    searchListCoins = props.searchList.map(e => {
      return (
        <p
          key={e.symbol}
          data-full_name={e.name}
          data-symbol={e.symbol}
          onClick={(e) => {
            props.fetchCoinFullData(e);
            props.hideMobileMenu();
          }}>
          {e.name} - {e.symbol}
        </p>
      )
    })

  }

  return (
    <div className={classes.header}>
      <h2>CRYPTO TRACKER</h2>
      <div className={classes.desktopMenu}>
        <div className={classes.search}>
          <form onChange={(e) => props.onSearch(e)}>
            <input className={classes.search__input} type="text" placeholder="Search..."/>
            <button className={classes.search__button}>
            <img src={require("../../assets/Mi lupa.svg")} alt="search icon" />
            </button>
          </form>
        </div>
      </div>
      <div className={classes.searchListWrapper}>
        {searchListCoins ? <h4>Search results:</h4> : null}
        {searchListCoins}
      </div>
      <div id="mobileMenu" className={props.showingMenu ? [classes.mobileMenu, classes.showMobMenu].join(" ") : classes.mobileMenu}>
        <div className={classes.search}>
          <form onChange={(e) => props.onSearch(e)}>
            <input className={classes.search__input} type="text" placeholder="Search..."/>
            <button className={classes.search__button}>
            <img src={require("../../assets/Mi lupa.svg")} alt="search icon" />
            </button>
          </form>
        </div>
        <div
          className={classes.menuCloseIcon}
          onClick={() => {
            props.hideMobileMenu();
            props.clearSearchList();
        }}>
          <span className={classes.bar1}></span>
          <span className={classes.bar2}></span>
        </div>
      </div>
      <div className={classes.menuIcon} onClick={props.showMobileMenu}>
        <span className={classes.bar1}></span>
        <span className={classes.bar2}></span>
        <span className={classes.bar3}></span>
      </div>
    </div>
  )
}

export default header;
