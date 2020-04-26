import { ApplyPluginsType, dynamic } from 'C:/Users/dell/Desktop/lesson_shuidi/react/antd-pro-tags2/node_modules/@umijs/runtime';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/",
    "component": dynamic({ loader: () => import(/* webpackChunkName: '.umi__plugin-layout__Layout' */'C:/Users/dell/Desktop/lesson_shuidi/react/antd-pro-tags2/src/.umi/plugin-layout/Layout.tsx'), loading: require('@/components/PageLoading/index').default}),
    "routes": [
      {
        "path": "/user",
        "layout": false,
        "routes": [
          {
            "name": "login",
            "path": "/user/login",
            "layout": false,
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__user__login' */'C:/Users/dell/Desktop/lesson_shuidi/react/antd-pro-tags2/src/pages/user/login'), loading: require('@/components/PageLoading/index').default}),
            "exact": true
          }
        ]
      },
      {
        "path": "/welcome",
        "name": "welcome",
        "icon": "smile",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Welcome' */'C:/Users/dell/Desktop/lesson_shuidi/react/antd-pro-tags2/src/pages/Welcome'), loading: require('@/components/PageLoading/index').default}),
        "exact": true
      },
      {
        "path": "/admin",
        "name": "admin",
        "icon": "crown",
        "access": "canAdmin",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Admin' */'C:/Users/dell/Desktop/lesson_shuidi/react/antd-pro-tags2/src/pages/Admin'), loading: require('@/components/PageLoading/index').default}),
        "routes": [
          {
            "path": "/admin/sub-page",
            "name": "sub-page",
            "icon": "smile",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Welcome' */'C:/Users/dell/Desktop/lesson_shuidi/react/antd-pro-tags2/src/pages/Welcome'), loading: require('@/components/PageLoading/index').default}),
            "exact": true
          }
        ]
      },
      {
        "name": "list.table-list",
        "icon": "table",
        "path": "/list",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__ListTableList' */'C:/Users/dell/Desktop/lesson_shuidi/react/antd-pro-tags2/src/pages/ListTableList'), loading: require('@/components/PageLoading/index').default}),
        "exact": true
      },
      {
        "path": "/",
        "redirect": "/welcome",
        "exact": true
      },
      {
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'C:/Users/dell/Desktop/lesson_shuidi/react/antd-pro-tags2/src/pages/404'), loading: require('@/components/PageLoading/index').default}),
        "exact": true
      }
    ]
  }
];

// allow user to extend routes
plugin.applyPlugins({
  key: 'patchRoutes',
  type: ApplyPluginsType.event,
  args: { routes },
});

export { routes };
