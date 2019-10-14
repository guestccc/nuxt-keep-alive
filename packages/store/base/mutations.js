import {
  ADD_NUM,
  MINUS_NUM,
  UPDATE_KEEP_ALIVE_INCLUDES,
} from './mutation-types';


export default {
  [ADD_NUM](state, num) {
    state.num += num
  },
  [MINUS_NUM](state, num) {
    state.num -= num
  },
  [UPDATE_KEEP_ALIVE_INCLUDES](state, { componentName, open }) {
    if (open) { // 开启
      state.includeComponents.push(componentName)
      return
    }
    state.includeComponents = state.includeComponents.filter(item => item !== componentName)
  },
}
