/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-unescaped-entities */

import React, { useEffect, useState } from 'react';

import { EventTemplate, Loading, ModalApp } from '@components';

import { useQuery } from 'react-query';
import { getDetailEventById } from '@services';

import loadable from '@loadable/component';
import { useSelector, useDispatch } from 'react-redux';
import { selectedContentIndex } from '@services/redux/slices/contentPage';
import { useHistory } from 'react-router';

// import DetailEventStyle from './style';

const DetailEventPage = loadable(() => import(/* webpackPrefetch: true */ './DetailEventPage'));
const UserFormPage = loadable(() => import(/* webpackPrefetch: true */ './UserFormPage'));

const ContentEventPage = ({ location }) => {
  const dispatch = useDispatch();
  const page = useSelector(({ contentPage }) => contentPage.contentPageIndex);
  const [isDone, setIsDone] = useState(true);

  const history = useHistory();

  //   const classes = DetailEventStyle();

  const { data, isLoading } = useQuery('detail', () => getDetailEventById(location.state.id));

  useEffect(() => {
    dispatch(selectedContentIndex(false));
    DetailEventPage.preload();
    UserFormPage.preload();
  }, [selectedContentIndex, DetailEventPage, UserFormPage]);

  const handleClose = () => {
    setIsDone(false);
    history.push('/');
  };

  return (
    <>
      {
      isLoading ? <Loading hasBackdrop isActive={isLoading} />
        : data?.data?.isEventDone ? (
          <ModalApp
            isActive={isDone}
            handleClose={handleClose}
            title="The Event Doesn't Exists"
          />
        ) : (
          <EventTemplate dataContent={data?.data}>
            {page ? <UserFormPage dataContent={data?.data} /> : (
              <DetailEventPage
                dataContent={data?.data}
              />
            )}
          </EventTemplate>
        )
    }

    </>
  );
};
export default ContentEventPage;
