<template>
    <div class="faq-main">
        <h1 class="faq-heading">Frequently Asked Questions</h1>

        <div class="questions-cant-wrap">
            <section class="questions-answers">
                <ul>
                    <li v-for="(qa, index) in questionAnswers" v-bind:key="index">
                        <QuestionAnswer :qa="qa"/>
                        <hr/>
                    </li>
                </ul>

                <div class="view-all-faq-con" v-if="isShort">
                    <nuxt-link to="/faq" class="primary-button-50px">View All FAQs</nuxt-link>
                </div>

            </section>
            <section class="cant-find-answers">
                <h2>Can`t find an answer?</h2>
                <nuxt-link to="/contact-us" class="primary-button-50px">Contact Us
                </nuxt-link>
            </section>
        </div>
    </div>
</template>

<script>
    import QuestionAnswer from "@/components/FAQ/QuestionAnswer.vue";

    export default {
        components: {QuestionAnswer},
        props: {
            isShort: Boolean,
            questionAnswers: Array
        },
    };
</script>
<style lang="scss" scoped>
    .faq-main {
        background-color: $bg-light;
        margin: 0 auto;
        padding: 0px 32px 150px 32px;

        @include for-tablet {
            padding: 62px 57px 114px 40px;
        }
        @include for-desktop {
            padding: 0px 0 73px 0;
            max-width: 80%;
        }
    }

    .view-all-faq-con {
        text-align: center;
    }

    .questions-cant-wrap {
        @include for-desktop {
            display: flex;
            justify-content: space-around;
        }
    }

    .questions-answers {
        z-index: 1;
        background-color: #f9fbfdb0;
        margin-top: 31px;
        flex-basis: 67%;
        @include for-desktop {
            margin-left: 170px;
        }
    }

    .cant-find-answers {
        margin-top: 75px;
        display: flex;
        flex-direction: column;
        order: -1;
        flex-basis: 33%;

        h2 {
            font-size: 38px;
            font-weight: 900;
        }
    }

    hr {
        border-top: 1px solid $hr-color;
        margin: 0px;
    }

    .primary-button-50px {
        text-transform: capitalize;
        margin-top: 35px;
        width: 320px;
        position: relative;
        z-index: 2;
    }

    .faq-heading {
        font-size: 40px;
        @include for-tablet {
            font-size: 64px;
            width: 647px;
            margin: 0 auto;
            text-align: center;
        }
    }
</style>
