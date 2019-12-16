<template>
    <div class="home-main">
        <Header/>
        <Main :questionAnswers="questionAnswers"/>
        <Footer/>

        <!--<client-only>-->
        <!--<ModalSearch />-->
        <!--<ModalGetStarted />-->
        <!--</client-only>-->
    </div>
</template>

<script>
    import {mapMutations} from "vuex";
    import Header from "~/components/Home/Hedear.vue";
    import Footer from "~/components/_shared/Footer.vue";
    // import ModalGetStarted from "~/components/_shared/ModalGetStarted.vue";
    // import ModalSearch from "~/components/_shared/ModalSearch.vue";
    import Main from "~/components/Home/Main.vue";

    export default {
        name: "home",
        components: {
            // ModalGetStarted,
            // ModalSearch,
            Header,
            Main,
            Footer
        },
        data() {
            return {
                TITLE: this.$config.META_HOME_DEFAULT.TITLE,
                questionAnswers:[]
            }
        },

        async asyncData(context) {
            let faq = await context.app.$http.get(`/v1/faqs?l=6`);
            return {
                questionAnswers: faq.data.list
            }
        },

        props: {
            // showSearch: Boolean,
            // searchText: String,
            showGetStarted: Boolean
        },
        mounted() {
            // if (
            //         this.$route.matched.some(
            //                 record =>
            //                         record.props.default && record.props.default.resetPasswordModalIsOpen
            //         )
            // ) {
            //   this.closeModals();
            //   this.openResetPasswordModal();
            // }
        },
        methods: {
            ...mapMutations("appStore", ["openResetPasswordModal", "closeModals"])
        }
    };
</script>
<style lang="scss" scoped>
    .home-main {
        position: relative;
    }

    /deep/ h2 {
        font-size: 24px;
        font-weight: 900;
        @include for-tablet {
            font-size: 42px;
        }
        @include for-desktop {
            font-size: 56px;
        }
    }
</style>
