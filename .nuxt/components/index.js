import { wrapFunctional } from './utils'

export { default as Table } from '../../client/components/Table.vue'

export const LazyTable = import('../../client/components/Table.vue' /* webpackChunkName: "components/table" */).then(c => wrapFunctional(c.default || c))
