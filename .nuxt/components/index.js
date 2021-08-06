import { wrapFunctional } from './utils'

export { default as Table } from '../../client/components/Table.vue'
export { default as LayoutAppBar } from '../../client/components/layout/AppBar.vue'

export const LazyTable = import('../../client/components/Table.vue' /* webpackChunkName: "components/table" */).then(c => wrapFunctional(c.default || c))
export const LazyLayoutAppBar = import('../../client/components/layout/AppBar.vue' /* webpackChunkName: "components/layout-app-bar" */).then(c => wrapFunctional(c.default || c))
