import React from 'react';
import Loadable from 'react-loadable';

// 异步加载组件
const LoadableComponent = Loadable({
  loader: () => import('./'),
  loading() {
      return (
          <div>Loading...</div>
      )
  }
});

export default () => <LoadableComponent />