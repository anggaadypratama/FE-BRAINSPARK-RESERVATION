import loadable from '@loadable/component';

const ListEventPage = loadable(() => import(/* webpackPrefetch: true */ '@page/ListEventPage'));
const LoginPage = loadable(() => import(/* webpackPrefetch: true */ '@page/LoginPage'));
const DashboardListPage = loadable(() => import(/* webpackPrefetch: true */ '@page/DashboardPage'));
const ContentEventPage = loadable(() => import(/* webpackPrefetch: true */ '@page/ContentEventPage'));

const ROUTES = [
  {
    name: 'ListEventPage',
    Component: ListEventPage,
    path: '/',
    isPrivate: false,
    exact: true,
  },
  {
    name: 'ContentEventPage',
    Component: ContentEventPage,
    path: '/post/:id',
    isPrivate: false,
    exact: true,
  },
  {
    name: 'LoginPage',
    Component: LoginPage,
    path: '/login',
    isPrivate: false,
    exact: true,
  },
  {
    name: 'DashboardPage',
    Component: DashboardListPage,
    path: '/dashboard',
    isPrivate: true,
    exact: false,

  },
];

export default ROUTES;
