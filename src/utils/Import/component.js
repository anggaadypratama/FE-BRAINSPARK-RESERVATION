import React from 'react';

export default (path) => React.lazy(() => import(path));
