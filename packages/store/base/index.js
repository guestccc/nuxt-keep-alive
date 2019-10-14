import * as actions from './actions';
import * as getters from './getters';
import mutations from './mutations';

const state = {
  includeComponents: [
    'Home',
    'HomeParentList',
    'HomeChildList',
    'Mall',
    'Cart',
    'User',
  ],
};

export default {
  getters,
  state,
  actions,
  mutations,
};
