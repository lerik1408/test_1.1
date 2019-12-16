const state = {
  userData: null
};

const mutations = {
  setUserData(state, payload) {
    state.userData = payload;
  }
};

const actions = {
  //
};

const getters = {
  //
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
