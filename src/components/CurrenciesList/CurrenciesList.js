import React from 'react';

import * as classes from './CurrenciesList.module.sass';

const currenciesList = props => {
  return (
    <div className={classes.listWrapper}>
      <div className={classes.list + " currenciesList"}>
        {props.currencies}
        {props.listLength < 39 ?
          <div className={classes.loadMoreButton} onClick={props.fetchMoreTop}>Load More</div>
        : null}
      </div>
    </div>
  )
}

export default currenciesList;
