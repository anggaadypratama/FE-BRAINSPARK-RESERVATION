import loadable from '@loadable/component';

const ListEventPage = loadable(() => import(/* webpackPrefetch: true */ '@page/ListEventPage'));
const LoginPage = loadable(() => import(/* webpackPrefetch: true */ '@page/LoginPage'));
const DashboardListPage = loadable(() => import(/* webpackPrefetch: true */ '@page/DashboardPage'));
const ContentEventPage = loadable(() => import(/* webpackPrefetch: true */ '@page/ContentEventPage'));

const prefix = '/brainspark';
const dashboardPrefix = `${prefix}/dashboard`;

const ROUTES = [
  {
    name: 'ListEventPage',
    Component: ListEventPage,
    path: `${prefix}`,
    isPrivate: false,
    exact: true,
  },
  {
    name: 'ContentEventPage',
    Component: ContentEventPage,
    path: `${prefix}/post/:id`,
    isPrivate: false,
    exact: true,
  },
  {
    name: 'LoginPage',
    Component: LoginPage,
    path: `${prefix}/login`,
    isPrivate: false,
    exact: true,
  },
  {
    name: 'DashboardPage',
    Component: DashboardListPage,
    path: `${dashboardPrefix}`,
    isPrivate: true,
    exact: false,

  },
];

export default ROUTES;
