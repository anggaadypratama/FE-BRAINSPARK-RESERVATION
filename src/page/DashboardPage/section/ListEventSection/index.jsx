import React, { useState, useEffect } from 'react';
import { ListCard, Loading } from '@components';
import { useQuery } from 'react-query';
import { getAllEventWithAuth } from '@services/index';

import { useDispatch } from 'react-redux';
import { setRefetch } from '@services/redux/slices/contentPage';
import ListDataEventStyle from './style';

const ListEvent = () => {
  const classes = ListDataEventStyle();
  const dispatch = useDispatch();

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

  useEffect(() => {
    dispatch(setRefetch(refetch));
  }, [refetch]);

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
  ) : (
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
  );
};

export default ListEvent;
