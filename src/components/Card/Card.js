import React from 'react';

import * as classes from './Card.module.sass';

const card = (props) => {
  let changePct24Hour = (
    <span className={classes.red}>
      <ion-icon name="arrow-round-down" alt="arrow-down"></ion-icon>
      {props.changePct24Hour}%
    </span>
  )

  if (props.changePct24Hour >= 0) {
    changePct24Hour = (
      <span className={classes.green}>
        <ion-icon name="arrow-round-up" alt="arrow-up"></ion-icon>
        {props.changePct24Hour}%
      </span>
    )
  }

  return (
    <div className={classes.card} onClick={props.loadDetails} data-name={props.name}>
      <span className={classes.currencyIconNameWrapper}>
        <span className={classes.currencyIcon}>
          <img src={`https://www.cryptocompare.com/${props.imgUrl}`} alt={props.fullName}/>
        </span>
        <span>{props.fullName}</span>
      </span>
      <span>{props.price}</span>
      {changePct24Hour}
    </div>
  )
}

export default card;
