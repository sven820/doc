export default {
    path: 'web',
    name: 'web',
    component: () => import('./index.vue'),
    children: [
        {
          path: 'ts',
          name: 'ts',
          component: () => import('./tsdemo/index.vue')
        },
        {
          path: 'vue',
          name: 'vue',
          component: () => import('./vue/index.vue')
        },
        {
          path: 'bt4',
          name: 'bt4',
          component: () => import('./bootstrap4/index.vue')
        },
        {
          path: 'layout',
          component: () => import('./layout/index.vue'),
          children: [
            {
              path: 'doc',
              component: () => import('./layout/doc.vue'),
            },
            {
              path: 'l1',
              component: () => import('./layout/l1.vue'),
            }
          ] 
        },
      ]
}