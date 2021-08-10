import React, { useState } from 'react';
import { ListCard, EmptyEvent, Loading } from '@components';
import { useQuery } from 'react-query';
import { getAllEventWithAuth } from '@services/index';

import ListDataEventStyle from './style';

const ListEvent = () => {
  const classes = ListDataEventStyle();

  const [isFinished, setFinished] = useState(0);

  const params = {
    isFinished,
  };

  const {
    data: dataEvent,
    isLoading,
    refetch,
  } = useQuery(['event', params], () => getAllEventWithAuth(params), {
    refetchOnWindowFocus: false,
  });

  const dataFilter = dataEvent?.data;

  const data = [
    'All Events',
    'Done',
  ];

  const handleChangeFilter = (e) => {
    setFinished(e);
  };

  return isLoading ? (
    <Loading />
  ) : dataFilter?.length > 0 ? (
    <ListCard
      dataFilter={data}
      cardData={dataFilter}
      className={classes.listcard}
      hasFilter
      canEdit
      onChange={handleChangeFilter}
      filterState={isFinished}
      lg={4}
      md={6}
      sm={12}
      refetch={refetch}
    />
  ) : <EmptyEvent message="Oops, it looks like there is no event for now" />;
};

export default ListEvent;
