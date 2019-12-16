<template>
    <div class="reset-password">
        <loading
                :active.sync="isLoading"
                :can-cancel="true"
                :is-full-page="false"
                color="#3074e4"
        />

        <HeaderNavBar class="only-mobile"/>
        <div class="reset-password-main">
            <form v-on:submit.prevent="onSubmit">
                <h1>Need a link to reset your password?</h1>
                <BaseInput type="email" v-model="email" required>E-mail</BaseInput>
                <button class="primary-button-50px">Reset Password</button>
            </form>
            <p class="reset-password-to-login">
                Just kidding. I remembered.
                <span @click="switchModalToLogin">Back</span>
            </p>
        </div>
    </div>
</template>

<script>
    import {mapMutations} from "vuex";
    import HeaderNavBar from "@/components/_shared/HeaderNavBar.vue";
    import BaseInput from "@/components/_shared/BaseInput.vue";
    import Loading from "vue-loading-overlay";

    export default {
        components: {HeaderNavBar, BaseInput, Loading},
        data() {
            return {
                isLoading: false,
                email: ""
            };
        },
        methods: {
            ...mapMutations("appStore", [
                "openEmailWasSendedModal",
                "openLoginModal",
                "closeModals"
            ]),
            async onSubmit() {
                this.isLoading = true;
                const payload = {email: this.email};
                try {
                    await this.$http.post("/v1/reset_password", payload);
                } catch {
                }

                this.closeModals();
                this.openEmailWasSendedModal(this.email);
                this.isLoading = false;
            },
            switchModalToLogin() {
                this.closeModals();
                this.openLoginModal();
            }
        }
    };
</script>

<style lang="scss" scoped>
    form {
        display: flex;
        flex-direction: column;
        margin-top: 200px;
        @include for-mobile {
            margin-top: 20%;
        }
        @include for-tablet {
            margin-top: 25px;
        }
    }

    .reset-password {
        background-color: $bg-light;
        min-height: 100%;
        overflow: hidden;
        @include for-tablet {
            max-width: 474px;
            height: 500px;
            border-radius: 12px;
            background-color: white;
            padding-top: 30px;
        }
    }

    .reset-password-main {
        height: 100%;
        padding-left: 30px;
        padding-right: 30px;
        @include for-tablet {
            border-radius: 12px;
            padding-left: 92px;
            padding-right: 92px;
        }
    }

    .forgot-password a {
        color: #7f92ab;
        font-family: $font-helvetica;
        font-weight: 300;
        display: flex;
        justify-content: flex-end;
    }

    .password-input {
        margin-bottom: 14px;
    }

    .primary-button-50px {
        margin-top: 14px;
        text-transform: capitalize;
    }

    .reset-password-to-login {
        text-align: center;
        margin-top: 36px;

        span {
            color: $blue;
            cursor: pointer;
        }
    }
</style>
