import { ADD_NUM, MINUS_NUM } from './mutation-types';

export const asyncAdd = ({ commit }, num) => {
  setTimeout(() => {
    commit(ADD_NUM, num)
  }, 1000)
}

export const asyncMinus = ({ commit }, num) => {
  setTimeout(() => {
    commit(MINUS_NUM, num)
  }, 1000)
}
