import React from 'react';
import { LoadingLayout } from '@/components';
import loadable from '@loadable/component';

const ListEventPage = loadable(() => import(/* webpackPrefetch: true */ '@/page/ListEventPage'), { fallback: <LoadingLayout /> });
const DetailEventPage = loadable(() => import(/* webpackPrefetch: true */ '@/page/DetailEventPage'), { fallback: <LoadingLayout /> });
const UserFormPage = loadable(() => import(/* webpackPrefetch: true */ '@/page/UserFormPage'), { fallback: <LoadingLayout /> });
const LoginPage = loadable(() => import(/* webpackPrefetch: true */ '@/page/LoginPage'), { fallback: <LoadingLayout /> });

const prefix = '/brainspark';
// const privatePrefix = '/dashboard';

const ROUTES = [
  {
    name: 'Brainspark',
    Component: ListEventPage,
    path: `${prefix}`,
    isPrivate: false,
  },
  {
    name: 'Brainspark Detail',
    Component: DetailEventPage,
    path: `${prefix}/content/:id`,
    isPrivate: false,
  },
  {
    name: 'Brainspark Form',
    Component: UserFormPage,
    path: `${prefix}/content/:id/form`,
    isPrivate: false,
  },
  {
    name: 'Login',
    Component: LoginPage,
    path: `${prefix}/login`,
    isPrivate: false,
  },
];

export default ROUTES;
