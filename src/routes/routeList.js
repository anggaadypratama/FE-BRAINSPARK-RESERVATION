import { lazy } from 'react';

const DetailEvent = lazy(() => import('../page/DetailEvent'));
const ListEvent = lazy(() => import('../page/ListEvent'));

const ROUTES = [
  {
    name: 'Brainspark',
    path: '/brainspark',
    isPrivate: false,
    component: ListEvent,
  },
  {
    name: 'Brainspark Detail',
    path: '/brainspark/:id',
    isPrivate: false,
    component: DetailEvent,
  },
];

export default ROUTES;
