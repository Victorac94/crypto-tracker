import React from 'react';

import * as classes from './ErrorMessage.module.sass';

const errorMessage = props => {
  return (
    <div className={classes.errorMessageBox}>
      <p>{props.error}</p>
    </div>
  )
}

export default errorMessage;
