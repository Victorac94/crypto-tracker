import React from 'react';

import * as classes from './CoinDetails.module.sass';

const coinDetails = props => {
  let change = null;

  if (props.details.USD.CHANGEPCT24HOUR >= 0) {
    change = (
      <span className={classes.green}>
        <ion-icon name="arrow-round-up" alt="arrow-up"></ion-icon>
        {props.details.USD.CHANGEPCT24HOUR}%
      </span>
    )
  } else {
    change = (
      <span className={classes.red}>
        <ion-icon name="arrow-round-down" alt="arrow-down"></ion-icon>
        {props.details.USD.CHANGEPCT24HOUR}%
      </span>
    )
  }

  return (
    <div className={classes.coinDetailsWrapper}>
      <p>
        <span className={classes.tag}>Price: </span>
        <span className={classes.price}>{props.details.USD.PRICE}</span>
      </p>
      <p>
        <span className={classes.tag}>Change: </span>
        {change}
      </p>
      <p>
        <span className={classes.tag}>Market: </span>
        <span className={classes.market}>{props.details.USD.MARKET}</span>
      </p>
      <p>
        <span className={classes.tag}>Open: </span>
        <span>{props.details.USD.OPENDAY}</span>
      </p>
      <p>
        <span className={classes.tag}>High Today: </span>
        <span>{props.details.USD.HIGHDAY}</span>
      </p>
      <p>
        <span className={classes.tag}>Low Today: </span>
        <span>{props.details.USD.LOWDAY}</span>
      </p>
      <p>
        <span className={classes.tag}>Volume Today: </span>
        <span>{props.details.USD.VOLUMEDAYTO}</span>
      </p>
      <p>
        <span className={classes.tag}>Volume 24h: </span>
        <span>{props.details.USD.VOLUME24HOURTO}</span>
      </p>
      <p>
        <span className={classes.tag}>Volume 24h: </span>
        <span>{props.details.USD.VOLUME24HOUR}</span>
      </p>
    </div>
  )
}

export default coinDetails;
