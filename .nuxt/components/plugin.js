import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Table: () => import('../../client/components/Table.vue' /* webpackChunkName: "components/table" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
