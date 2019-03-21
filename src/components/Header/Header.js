import React from 'react';

import * as classes from './Header.module.sass';

const header = props => {
  return (
    <div className={classes.header}>
      <h2>CRYPTO TRACKER</h2>
      <div className={classes.menuIcon}>
        <span className={classes.bar1}></span>
        <span className={classes.bar2}></span>
        <span className={classes.bar3}></span>
      </div>
    </div>
  )
}

export default header;
