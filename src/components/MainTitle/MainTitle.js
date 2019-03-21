import React from 'react';

import * as classes from './MainTitle.module.sass';

const mainTitle = props => {
  return (
    <h1 className={classes.title}>
      {props.title}
    </h1>
  )
}

export default mainTitle;
