import React from 'react';

import * as classes from './DetailsTitle.module.sass';

const detailsTitle = props => {
  return (
    <div className={classes.detailsTitle}>
      <span className={classes.icon}>
        <img src={`https://www.cryptocompare.com/${props.fullData.USD.IMAGEURL}`} alt={props.fullName} />
      </span>
      <span className={classes.fullName}>{props.fullName}</span>
    </div>
  )
}

export default detailsTitle;
