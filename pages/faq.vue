<template>
    <div class="faq">
        <HeaderNavBar/>
        <ContentFaq :questionAnswers="questionAnswers"/>
        <Footer/>
    </div>
</template>

<script>
    import HeaderNavBar from "@/components/_shared/HeaderNavBar.vue";
    import Footer from "@/components/_shared/Footer.vue";
    import ContentFaq from "@/components/_shared/ContentFaq.vue";

    export default {
        components: {HeaderNavBar, Footer, ContentFaq},

        data() {
            return {
                questionAnswers: []
            }
        },
        async asyncData(context) {
            let data = await context.app.$http.get(`/v1/faqs`);
            return {
                questionAnswers: data.data.list
            }
        },

    };
</script>

<style lang="scss" scoped>
    .faq {
        background-color: $bg-light;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 100vh;
    }
</style>
