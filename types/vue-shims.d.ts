declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '@vue/runtime-core' {
  interface GlobalComponents {
    IconifyIcon: typeof import('@iconify/vue')['Icon']
  }
}
