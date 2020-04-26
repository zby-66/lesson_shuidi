import React from 'react';
import { ApplyPluginsType } from 'umi';
import { plugin } from '../core/umiExports';

export default (props) => {
  const runtimeConfig = plugin.applyPlugins({
    key: 'layout',
    type: ApplyPluginsType.modify,
    initialValue: {},
  }) || {};
  const userConfig = {
    ...{'name':'Ant Design Pro','theme':'PRO','locale':true,'showBreadcrumb':true},
    ...runtimeConfig
  };
  return React.createElement(require('C:/Users/dell/Desktop/lesson_shuidi/react/antd-pro-tags2/node_modules/@umijs/plugin-layout/lib/layout/index.js').default, {
    userConfig,
    ...props
  })
}
