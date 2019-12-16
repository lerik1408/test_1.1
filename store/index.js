// import Vue from "vue";
import Vuex from "vuex";
// import createPersistedState from "vuex-persistedstate";

import appStore from "./modules/app";
import authStore from "./modules/auth";

// Vue.use(Vuex);

const state = {
    //
};

const mutations = {
    //
};

const actions = {
    //
};

const getters = {
    //
};

const createStore = () => {
    return new Vuex.Store({
        state,
        mutations,
        actions,
        getters,
        modules: {
            appStore,
            authStore
        },
        // plugins: [
        //     createPersistedState({
        //       key: "vuex",
        //       filter(val) {
        //         // don't save state of Modals
        //         switch (val.type) {
        //           case "appStore/openLoginModal":
        //           case "appStore/openSignUpModal":
        //           case "appStore/openResetPasswordModal":
        //           case "appStore/openEmailWasSendedModal":
        //             return false;
        //           default:
        //             return true;
        //         }
        //       }
        //     })
        // ]
    });
};

export default createStore;
