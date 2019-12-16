<template>
    <main class="main">
        <Recommendations />
        <HowItWorksNew/>

        <WhoIsWorking/>
        <bright-effect class="bright-effect"/>
        <SprizzyIsForYou/>
        <Benefits/>
        <CustomersLove/>
        <section style="background-color: #F9FBFD;">
        <ContentFaq :isShort="true" :questionAnswers="questionAnswers"/>
        </section>
        <div class="try-it-now-main">
            <h1>Ready to promote your video?</h1>
            <div class="try-it-now-controls">
                <div v-if="testSlot === 1">
                    <TryItNow :isShowLoginWithGoogle="false"/>
                </div>
                <div v-if="testSlot === 2">
                    <TryItNow :isShowLoginWithGoogle="true"/>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    import Recommendations from './Recommendations.vue';
    import HowItWorksNew from "./HowItWorks_new.vue";
    import WhoIsWorking from "@/components/_shared/WhoIsWorking.vue";
    import CustomersLove from "./CustomersLove";
    import BrightEffect from "@/components/icons/BrightEffect.vue";
    import Benefits from "./Benefits.vue";
    import SprizzyIsForYou from "./SprizzyIsForYou.vue";
    import TryItNow from "@/components/Home/TryItNow.vue";
    import ContentFaq from "@/components/_shared/ContentFaq.vue";

    export default {
        components: {
            Recommendations,
            WhoIsWorking,
            CustomersLove,
            HowItWorksNew,
            BrightEffect,
            Benefits,
            SprizzyIsForYou,
            TryItNow,
            ContentFaq
        },
        props:{
            questionAnswers: Array
        },

        data() {
            return {
                testSlot: this.$config.APP_A2B_TEST_SLOT,
                // fetchedListOfVideos: []
            };
        },
        methods: {

        }
    };
</script>

<style lang="scss" scoped>
    .try-it-now-main {
        background: linear-gradient(0deg, #3b3f5a 14.49%, #171c34 101.77%);
        padding-top: 163px;
        padding-bottom: 113px;
        text-align: center;

        h1 {
            position: relative;
            color: white;
            font-size: 46px;
            text-align: center;
            margin-bottom: 30px;
            z-index: 2;
        }
    }

    .try-it-now-controls {
        position: relative;
    }

    .bright-effect {
        position: absolute;
        bottom: 200px;
        right: 0px;
    }
</style>
