const state = {
    loginModalIsOpen: false,
    signUpModalIsOpen: false,
    resetPasswordModalIsOpen: false,
    emailWasSendedModalIsOpen: false,
    emailWasSendedEmailAddress: null,

    showSearch: false,
    searchVideoQuery: null,

    showGetStarted: false,
    getStartedVideoId: null,
    getStartedImageSrc: null,
    getStartedVideoTitle: null,
    getStartedSearchText: null,

    balance: 0
};

const mutations = {
    openLoginModal(state) {
        state.loginModalIsOpen = true;
    },
    openSignUpModal(state) {
        state.signUpModalIsOpen = true;
    },
    openResetPasswordModal(state) {
        state.resetPasswordModalIsOpen = true;
    },
    openEmailWasSendedModal(state, email) {
        state.emailWasSendedEmailAddress = email;
        state.emailWasSendedModalIsOpen = true;
    },
    openSearchModal(state, query) {
        state.showSearch = true;
        state.searchVideoQuery = query;
    },
    openGetStartedModel(state, data) {
        state.showGetStarted = true;
        state.getStartedVideoId = data.videoId;
        state.getStartedImageSrc = data.thumbnails;
        state.getStartedVideoTitle = data.title;
        state.getStartedSearchText = data.searchText;
    },
    closeSearchModal(state){
        state.showSearch = false;
    },
    closeGetStartedModel(state){
        state.showGetStarted = false;
    },
    closeModals(state) {
        state.loginModalIsOpen = false;
        state.signUpModalIsOpen = false;
        state.resetPasswordModalIsOpen = false;
        state.emailWasSendedModalIsOpen = false;
        state.showSearch = false;
        state.showGetStarted = false;
    },
    setBalance(state, payload) {
        state.balance = payload;
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
