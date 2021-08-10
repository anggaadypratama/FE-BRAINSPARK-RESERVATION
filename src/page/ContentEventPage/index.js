/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-unescaped-entities */

import React, { useEffect } from 'react';

import { EventTemplate, Loading } from '@components';

import { useQuery } from 'react-query';
import { getDetailEventById } from '@services';

import loadable from '@loadable/component';
import { useSelector, useDispatch } from 'react-redux';
import { selectedContentIndex } from '@services/redux/slices/contentPage';

// import DetailEventStyle from './style';

const DetailEventPage = loadable(() => import('./DetailEventPage'));
const UserFormPage = loadable(() => import('./UserFormPage'));

const ContentEventPage = ({ location }) => {
  const dispatch = useDispatch();
  const page = useSelector(({ contentPage }) => contentPage.contentPageIndex);

  //   const classes = DetailEventStyle();

  const { data, isLoading } = useQuery('detail', () => getDetailEventById(location.state.id));

  useEffect(() => {
    dispatch(selectedContentIndex(false));
  }, [selectedContentIndex]);

  return (
    <>
      {
      isLoading ? <Loading hasBackdrop isActive={isLoading} /> : (
        <EventTemplate dataContent={data?.data}>
          {page ? <UserFormPage dataContent={data?.data} /> : (
            <DetailEventPage
              description={data?.data?.description}
              contentImage={data?.data?.imagePoster}
            />
          )}
        </EventTemplate>
      )
    }

    </>
  );
};
export default ContentEventPage;
