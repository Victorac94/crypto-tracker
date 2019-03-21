import React from 'react';

import * as classes from './DetailsTitle.module.sass';

const detailsTitle = props => {
  return (
    <div className={classes.detailsTitle}>
      <span className={classes.icon}>
        <img src={`https://www.cryptocompare.com/${props.details.ImageUrl}`} alt={props.details.FullName} />
      </span>
      <span className={classes.fullName}>{props.details.FullName}</span>
    </div>
  )
}

export default detailsTitle;
