import { Plugin } from 'C:/Users/dell/Desktop/lesson_shuidi/react/antd-pro-tags2/node_modules/@umijs/runtime';

const plugin = new Plugin({
  validKeys: ['patchRoutes','rootContainer','render','onRouteChange','getInitialState','locale','locale','layout','request',],
});
plugin.register({
  apply: require('C:/Users/dell/Desktop/lesson_shuidi/react/antd-pro-tags2/src/app.tsx'),
  path: 'C:/Users/dell/Desktop/lesson_shuidi/react/antd-pro-tags2/src/app.tsx',
});
plugin.register({
  apply: require('C:/Users/dell/Desktop/lesson_shuidi/react/antd-pro-tags2/node_modules/umi-plugin-antd-icon-config/lib/app.js'),
  path: 'C:/Users/dell/Desktop/lesson_shuidi/react/antd-pro-tags2/node_modules/umi-plugin-antd-icon-config/lib/app.js',
});
plugin.register({
  apply: require('C:/Users/dell/Desktop/lesson_shuidi/react/antd-pro-tags2/src/.umi/plugin-access/rootContainer.ts'),
  path: 'C:/Users/dell/Desktop/lesson_shuidi/react/antd-pro-tags2/src/.umi/plugin-access/rootContainer.ts',
});
plugin.register({
  apply: require('../plugin-initial-state/runtime'),
  path: '../plugin-initial-state/runtime',
});
plugin.register({
  apply: require('C:/Users/dell/Desktop/lesson_shuidi/react/antd-pro-tags2/src/.umi/plugin-locale/runtime.tsx'),
  path: 'C:/Users/dell/Desktop/lesson_shuidi/react/antd-pro-tags2/src/.umi/plugin-locale/runtime.tsx',
});
plugin.register({
  apply: require('@@/plugin-layout/runtime.tsx'),
  path: '@@/plugin-layout/runtime.tsx',
});
plugin.register({
  apply: require('../plugin-model/runtime'),
  path: '../plugin-model/runtime',
});

export { plugin };
