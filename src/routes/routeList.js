// import loadable from '@loadable/component';

// const ListEvent = loadable(() => import(/* webpackPrefetch: true */ '@page/ListEvent'));
// const DetailEvent = loadable(() => import(/* webpackPrefetch: true */ '@page/DetailEvent'));
// const Login = loadable(() => import(/* webpackPrefetch: true */ '@page/Login'));

const prefix = '/brainspark';
// const privatePrefix = '/dashboard';

const ROUTES = [
  {
    name: 'ListEvent',
    // Component: ListEvent,
    path: `${prefix}`,
    isPrivate: false,
  },
  {
    name: 'DetailEvent',
    // Component: DetailEvent,
    path: `${prefix}/content/:id`,
    isPrivate: false,
  },
  {
    name: 'Login',
    // Component: Login,
    path: `${prefix}/login`,
    isPrivate: false,
  },
];

export default ROUTES;
