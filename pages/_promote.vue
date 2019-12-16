<template>
    <div class="category-page">
        <HeaderNavBar/>
        <section class="promotion">
            <h1
                    class="page-header"
                    v-if="category"
                    v-html="category.section_1_title"
            ></h1>

            <img
                    v-if="category"
                    :src="category.section_1_image"
                    :alt="category.section_1_title"
                    class="promotion-image"
            />

            <div class="review" v-if="category" v-html="category.section_1_body">

            </div>
        </section>

        <section class="try-it-now">
            <h2 class="search-heading">{{ category ? category.try_it_title : 'Try it now!' }}</h2>
            <div class="try-it-now-controls">
                <div v-if="testSlot === 1">
                    <TryItNow :isShowLoginWithGoogle="false"/>
                </div>
                <div v-if="testSlot === 2">
                    <TryItNow :isShowLoginWithGoogle="true"/>
                </div>
            </div>
        </section>

        <section class="how-we-work">
            <h3
                    class="how-we-work-heading"
                    v-if="category"
                    v-html="category.section_2_title"
            ></h3>

            <div class="work-steps" v-if="category" v-html="category.section_2_body">
                <!--<ol class="work-steps">-->
                <!--<li class="work-steps-item">-->
                <!--<span class="is-purple">1.</span> Provide keywords describing your-->
                <!--video (e.g., wedding makeup ideas).-->
                <!--</li>-->
                <!--<li class="work-steps-item">-->
                <!--<span class="is-purple">2.</span> Provide the names of similar "health-->
                <!--& beauty" channels (jensbeautytips).-->
                <!--</li>-->
                <!--<li class="work-steps-item">-->
                <!--<span class="is-purple">3.</span> Your video is seen by fans of-->
                <!--similar channels and by people searching for your keywords.-->
                <!--</li>-->
                <!--</ol>-->
            </div>

            <img
                    v-if="category"
                    :src="category.section_2_image"
                    :alt="category.section_2_title"
                    class="how-we-work-image"
            />
        </section>

        <ContentFaq :questionAnswers="questionAnswers"/>

        <BrightEffect class="bright-effect"/>
        <WhoIsWorking/>


        <div class="start-it-now">
            <h2 class="search-heading">
                Start your Compaign Now!
            </h2>
            <div class="try-it-now-controls">
                <div v-if="testSlot === 1">
                    <TryItNow :isShowLoginWithGoogle="false"/>
                </div>
                <div v-if="testSlot === 2">
                    <TryItNow :isShowLoginWithGoogle="true"/>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>
<script>
    import HeaderNavBar from "@/components/_shared/HeaderNavBar.vue";
    import Footer from "@/components/_shared/Footer.vue";
    import WhoIsWorking from "@/components/_shared/WhoIsWorking.vue";
    import ContentFaq from "@/components/_shared/ContentFaq.vue";
    import BrightEffect from "@/components/icons/BrightEffect.vue";
    import TryItNow from "@/components/Home/TryItNow.vue";

    export default {
        components: {
            HeaderNavBar,
            Footer,
            WhoIsWorking,
            ContentFaq,
            BrightEffect,
            TryItNow
        },
        data() {
            return {
                title: this.$config.META_HOME_DEFAULT.TITLE,
                description: this.$config.META_HOME_DEFAULT.DESCRIPTION,
                keywords: this.$config.META_HOME_DEFAULT.KEYWORDS,
                testSlot: this.$config.APP_A2B_TEST_SLOT,
                category: null,
                questionAnswers: []
            };
        },
        head() {
            return {
                title: this.title || this.$config.META_HOME_DEFAULT.TITLE,
                meta: [
                    {hid: 'description', name: 'description', content: this.description || this.$config.META_HOME_DEFAULT.DESCRIPTION},
                    {hid: 'keywords', name: 'keywords', content: this.keywords || this.$config.META_HOME_DEFAULT.KEYWORDS}
                ]
            }
        },

        async asyncData(context) {
            let url = context.params.promote.replace('promote-', '');

            if (url.trim().length > 0) {
                try {
                    const result = await context.app.$http
                        .get(`/v1/promote/youtube/category/${url}`);

                    const faq = await context.app.$http.get(`/v1/faqs`);

                    if (result.data.success) {
                        return {
                            category: result.data.data,
                            title: result.data.data.page_title,
                            description: result.data.data.page_description,
                            keywords: result.data.data.page_keywords,
                            questionAnswers: faq.data.list
                        }
                    }
                } catch (e) {
                    return context.redirect('/');
                }
            }

            return context.redirect('/');
        },
        methods: {},
        created() {
        }
    };
</script>
<style lang="scss" scoped>
    .category-page {
        background: $bg-light;
        position: relative;
    }

    .promotion {
        background: $bg-light;
        margin: 44px auto 0 auto;

        @include for-tablet {
            display: grid;
            grid-template-columns: repeat(10, 1fr);
        }
        @include for-desktop {
            margin-bottom: 50px;
        }
    }

    .page-header {
        font-size: 36px;
        margin: 0px auto;
        max-width: 90%;
        @include for-tablet {
            margin: 0;
            font-size: 42px;
            width: 386px;
            grid-column: 5 / 11;
            grid-row-start: 1;
            grid-row-end: 1;
            align-self: center;
            z-index: 2;
            margin-left: 50px;
        }
        @include for-desktop {
            font-size: 72px;
            width: 672px;
            align-self: end;
            margin-left: 120px;
        }
    }

    /deep/ .is-purple {
        color: #649dfb;
        font-weight: 900;
    }

    .promotion-image {
        display: block;
        max-width: 300px;
        margin: 0 auto;
        @include for-tablet {
            max-width: 369px;
            grid-column-start: 2;
            grid-column-end: 6;
            grid-row-start: 1;
            grid-row-end: 1;
        }
        @include for-desktop {
            min-width: 647px;
            grid-row: 1 / 3;
        }
    }

    .review {
        background: white;
        max-width: 313px;
        border-radius: 20px;
        box-shadow: 0px 10px 40px rgba(22, 34, 78, 0.06);
        margin-left: 20px;
        margin-bottom: 20px;
        display: grid;
        grid-template-columns: 1fr 3fr 3fr;
        padding: 23px 19px;
        @include for-mobile() {
            margin-top: 20px;
            margin-right: 20px;
            max-width: 100%;
        }
        @include for-tablet {
            grid-column: 1 / -1;
            grid-row: 2 / 2;
            max-width: 570px;
            margin-left: 40px;
            margin-bottom: 100px;
            margin-top: 40px;
        }
        @include for-desktop {
            grid-column: 5 / -1;
            align-self: start;
            margin-left: 120px;
        }
    }

    /deep/ .avatar {
        justify-self: end;
        margin-right: 10px;
        @include for-tablet {
            width: 46px;
            margin-right: 0;
            margin-bottom: -20px;
            justify-self: center;
        }
    }

    /deep/ .name {
        font-family: Gilroy;
        font-weight: 900;
        font-size: 14px;
        @include for-tablet {
            font-size: 16px;
            align-self: center;
            grid-column: 2 / 2;
            grid-row: 1 / 1;
        }
    }

    /deep/ .date {
        font-family: Gilroy;

        font-size: 14px;
        font-weight: 600;
        color: #939db6;
        justify-self: end;
        align-self: center;
        @include for-tablet {
            margin-right: 30px;
            grid-column: 2 / 2;
            grid-row: 1 / 1;
        }
    }

    /deep/ .review-text {
        line-height: 184%;
        font-size: 14px;
        grid-column: 2 / 4;
        @include for-desktop {
            font-size: 16px;
        }
    }

    .try-it-now {
        background: url("~@/assets/img/CategoryPage/try-it-now-bg-mobile.svg"),
        linear-gradient(0deg, #3b3f5a 14.49%, #171c34 101.77%);
        background-repeat: no-repeat;
        background-size: cover, 100%;
        padding: 40px 0;
        @include for-tablet {
            background: url("~@/assets/img/CategoryPage/try-it-now-bg-tablet.svg"),
            linear-gradient(0deg, #3b3f5a 14.49%, #171c34 101.77%);
            background-repeat: no-repeat;
            background-size: 100%, 100%;
            padding: 40px 0;
            height: auto;
        }
        @include for-desktop {
            background: url("~@/assets/img/CategoryPage/try-it-now-bg-desktop.svg"),
            linear-gradient(0deg, #3b3f5a 14.49%, #171c34 101.77%);
            background-repeat: no-repeat;
            background-size: 100%, 100%;
            padding-bottom: 58px;
            height: auto;
        }
    }

    .search-heading {
        font-size: 42px;
        color: white;
        font-weight: 900;
        text-align: center;
        margin: 0px auto 30px auto;
        z-index: 2;
        position: relative;
        @include for-tablet {
            margin-bottom: 30px;
        }
        @include for-desktop {
            font-size: 56px;
            margin-bottom: 50px;
        }
    }

    .start-it-now {
        background: linear-gradient(0deg, #3b3f5a 14.49%, #171c34 101.77%);
        padding-top: 150px;
        padding-bottom: 113px;

        .search-heading {
            margin-bottom: 50px;
            @include for-tablet {
                font-size: 66px;
                width: 596px;
            }
        }
    }

    .how-we-work {
        background: white;
        @include for-tablet {
            display: grid;
            align-items: center;
            grid-template-columns: 1fr 1fr;
            padding-left: 40px;
            padding-right: 40px;
        }
        @include for-desktop {
            justify-items: end;
            padding-left: 150px;
            padding-right: 150px;
        }
    }

    .work-steps {
        grid-row: 2 / 3;
        grid-column: 2 / 3;
        @include for-desktop {
            justify-self: start;
            align-self: start;
        }
    }

    /deep/ .work-steps-item {
        font-family: $font-helvetica;
        font-weight: 300;
        line-height: 200%;
        margin: 0 auto 30px auto;
        max-width: 90%;
        @include for-tablet {
            font-size: 18px;
        }
        @include for-desktop {
            margin-bottom: 40px;
            margin-top: 40px;
        }
    }

    .how-we-work-heading {
        margin: 36px auto;
        font-size: 24px;
        line-height: 33px;
        text-align: center;
        font-weight: 900;
        @include for-tablet {
            font-size: 42px;
            line-height: 63px;
            grid-column: 1 / -1;
            grid-row: 1 / 2;
        }
        @include for-desktop {
            font-size: 56px;
            line-height: 80px;
        }
    }

    .how-we-work-image {
        @include for-tablet {
            // grid-column: 1 / 2;
            // grid-row: 2 / 3;
            max-width: 334px;
        }
        @include for-desktop {
            max-width: 650px;
        }
    }

    /deep/ .who-is-working {
        background: none;
        padding-top: 0px;
        position: relative;
    }

    .bright-effect {
        position: absolute;
        bottom: 400px;
        right: -112px;
        @include for-tablet {
            left: 100px;
        }
        @include for-desktop {
            bottom: 200px;
            left: 546px;
        }
    }

    .try-it-now-controls {
        text-align: center;
        position: relative;
    }
</style>
