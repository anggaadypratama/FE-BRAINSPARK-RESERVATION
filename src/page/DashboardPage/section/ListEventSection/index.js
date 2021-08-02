import React from 'react';
import { ListCard } from '@components';
import ListDataEventStyle from './style';

const ListEvent = () => {
  const classes = ListDataEventStyle();

  const data = [
    'All Events',
    'Done',
  ];

  return <ListCard dataFilter={data} className={classes.listcard} />;
};

export default ListEvent;
