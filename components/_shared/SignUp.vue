<template>
    <div>
        <loading
                :active.sync="isLoading"
                :can-cancel="true"
                :is-full-page="false"
                color="#3074e4"
        />

        <LogSigForm
                :errorMessage="this.serverErrorMessage"
                whichType="Sign Up"
                :handleSubmit="signUp"
                :videoUrl="videoUrl"
        />
    </div>
</template>

<script>
    import {mapMutations} from "vuex";
    import Loading from "vue-loading-overlay";
    import LogSigForm from "@/components/_shared/LogSigForm.vue";

    export default {
        components: {LogSigForm, Loading},
        props: {
            videoUrl: String
        },
        data() {
            return {
                serverErrorMessage: "",
                isLoading: false
            };
        },
        methods: {
            ...mapMutations("appStore", ["closeModals"]),
            ...mapMutations("authStore", ["setUserData"]),
            async signUp(login, password, videoUrl = null) {
                this.isLoading = true;
                let payload = {email: login, password: password, type: 0};

                if (this.$cookies.get("ref")) payload.ref = this.$cookies.get("ref");

                if (this.$cookies.get("utm_source"))
                    payload.utm_source = this.$cookies.get("utm_source");

                if (this.$cookies.get("promo"))
                    payload.promo = this.$cookies.get("promo");

                // if (this.$cookies.get("is_beta"))
                //   payload.is_beta = this.$cookies.get("is_beta");

                if (this.$cookies.get("referrer"))
                    payload.referrer = this.$cookies.get("referrer");

                if (this.$cookies.get("deposit"))
                    payload.deposit = this.$cookies.get("deposit");

                if (this.$cookies.get("sdcb"))
                    payload.campaign_min_budget = this.$cookies.get("sdcb");

                if (videoUrl) payload.url = videoUrl;

                this.$http
                    .post("/v1/signup", payload)
                    .then(resp => {
                        // clear cookies
                        this.$cookies.remove("promo");

                        const _payload = {is_new: 1};
                        if (this.videoUrl) _payload.url = this.videoUrl;

                        const params = new URLSearchParams(_payload).toString();

                        // redirect with token to Login
                        window.location = `${this.$config.APP_BASE_URL}/login/by/token/${
                            resp.data.token
                            }?${params}`;
                    })
                    .catch(err => {
                        this.isLoading = false;
                        if (err.response.data.message)
                            this.serverErrorMessage = err.response.data.message;
                        if (err.response.data.error)
                            this.serverErrorMessage = `${err.response.data.error[0].param} ${
                                err.response.data.error[0].msg
                                }`;
                    });

            }
        }
    };
</script>
