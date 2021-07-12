import loadable from '@loadable/component';

const ListEventPage = loadable(() => import(/* webpackPrefetch: true */ '@/page/ListEventPage'));
const DetailEventPage = loadable(() => import(/* webpackPrefetch: true */ '@/page/DetailEventPage'));
const LoginPage = loadable(() => import(/* webpackPrefetch: true */ '@/page/LoginPage'));

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
    name: 'Login',
    Component: LoginPage,
    path: `${prefix}/login`,
    isPrivate: false,
  },
];

export default ROUTES;
