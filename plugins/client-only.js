import Vue from 'vue'
import VueNoty from "vuejs-noty";
import { Carousel, Slide } from "vue-carousel";
import VueCookies from "vue-cookies";
import createPersistedState from "vuex-persistedstate";
import DatePicker from "vue2-datepicker";
import VueClipboard from "vue-clipboard2";
import PortalVue from "portal-vue";

// import ModalLogin from "@/components/_shared/ModalLogin.vue";
// import ModalSignUp from "@/components/_shared/ModalSignUp.vue";
// import ModalResetPassword from "@/components/_shared/ModalResetPassword.vue";
// import ModalEmailSended from "@/components/_shared/ModalEmailSended.vue";
// import toastr from "toastr";


Vue.use(VueNoty, {
    timeout: 5000,
    progressBar: true,
    layout: "topRight"
});


Vue.use(PortalVue);
Vue.use(VueClipboard);
Vue.use(VueCookies);

Vue.component('carousel', Carousel);
Vue.component('slide', Slide);
Vue.component('DatePicker', DatePicker);
// Vue.component('portal', PortalVue);

// Vue.component('ModalLogin', ModalLogin);
// Vue.component('ModalSignUp', ModalSignUp);
// Vue.component('ModalResetPassword', ModalResetPassword);
// Vue.component('ModalEmailSended', ModalEmailSended);



export default ({store}, inject) => {
    //inject('cookies', VueCookies);

    createPersistedState({
        key: "vuex",
        filter(val) {
            // don't save state of Modals
            switch (val.type) {
                case "appStore/openLoginModal":
                case "appStore/openSignUpModal":
                case "appStore/openResetPasswordModal":
                case "appStore/openEmailWasSendedModal":
                    return false;
                default:
                    return true;
            }
        }
    })(store)
}