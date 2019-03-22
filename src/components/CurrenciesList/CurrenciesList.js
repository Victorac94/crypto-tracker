import React from 'react';

import * as classes from './CurrenciesList.module.sass';

const currenciesList = props => {
  return (
    <div className={classes.listWrapper}>
      <div className={classes.list + " currenciesList"}>
        {props.currencies}
      </div>
    </div>
  )
}

export default currenciesList;
