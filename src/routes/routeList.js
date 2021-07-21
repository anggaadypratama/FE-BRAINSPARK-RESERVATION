// import loadable from '@loadable/component';

// const ListEvent = loadable(() => import(/* webpackPrefetch: true */ '@page/ListEvent'));
// const DetailEvent = loadable(() => import(/* webpackPrefetch: true */ '@page/DetailEvent'));
// const Login = loadable(() => import(/* webpackPrefetch: true */ '@page/Login'));

const prefix = '/brainspark';
// const privatePrefix = '/dashboard';

const ROUTES = [
  {
    name: 'ListEventPage',
    // Component: ListEvent,
    path: `${prefix}`,
    isPrivate: false,
  },
  {
    name: 'DetailEventPage',
    // Component: DetailEvent,
    path: `${prefix}/content/:id`,
    isPrivate: false,
  },
  {
    name: 'UserFormPage',
    // Component: UserFormPage,
    path: `${prefix}/content/:id/form`,
    isPrivate: false,
  },
  {
    name: 'LoginPage',
    // Component: Login,
    path: `${prefix}/login`,
    isPrivate: false,
  },
  {
    name: 'DashboardPage',
    path: `${prefix}/dashboard`,
    isPrivate: false,
  },
];

export default ROUTES;
