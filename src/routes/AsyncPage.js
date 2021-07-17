// import React from 'react';
import loadable from '@loadable/component';

const AsyncPage = loadable((props) => {
  console.log(props.name);
  return import(`@page/${props.name}`);
});

export default AsyncPage;
