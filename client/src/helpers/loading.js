import React, { Fragment } from 'react';

export const showLoading = () => (
  <Fragment>
    <div className='spinner-border text-danger' role='status'>
      <span className='sr-only'></span>
    </div>
  </Fragment>
);
