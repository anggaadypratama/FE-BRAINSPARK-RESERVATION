import loadable from '@loadable/component';

const ListEventPage = loadable(() => import(/* webpackPrefetch: true */ '@page/ListEventPage'));
const DetailEventPage = loadable(() => import(/* webpackPrefetch: true */ '@page/DetailEventPage'));
const UserFormPage = loadable(() => import(/* webpackPrefetch: true */ '@page/UserFormPage'));
const LoginPage = loadable(() => import(/* webpackPrefetch: true */ '@page/LoginPage'));
const DashboardListPage = loadable(() => import(/* webpackPrefetch: true */ '@page/DashboardPage'));

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
    name: 'DetailEventPage',
    Component: DetailEventPage,
    path: `${prefix}/content/:id`,
    isPrivate: false,
    exact: true,
  },
  {
    name: 'UserFormPage',
    Component: UserFormPage,
    path: `${prefix}/content/:id/form`,
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
    isPrivate: false,
    exact: false,

  },
];

export default ROUTES;
