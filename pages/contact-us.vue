<template>
    <div class="contact-us">
        <HeaderNavBar />
        <div class="contact-us-main">
            <h1>
                Have Questions?
                <br />Let Us Know!
            </h1>
            <p class="main-text">
                We're happy to answer any questions you may have about Sprizzy. For the
                fastest support, we recommend completing the form or sending us an
                email.
            </p>
            <form @submit.prevent="submitForm">
                <div class="input-label">
                    <label class="primary-label" for="user_name">Your name*</label>
                    <input
                            v-model="form.user_name"
                            id="user_name"
                            class="primary-input"
                            required
                    />
                </div>
                <div class="input-label">
                    <label class="primary-label" for="e-mail">E-mail*</label>
                    <input
                            v-model="form.email"
                            id="e-mail"
                            class="primary-input"
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                            placeholder="hello@example.com"
                            required
                    />
                </div>
                <div class="input-label">
                    <label class="primary-label" for="url">YouTube link*</label>
                    <input
                            v-model="form.url"
                            id="url"
                            pattern="^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$"
                            class="primary-input"
                            placeholder="https://www.youtube.com/watch?v=xxx"
                            required
                    />
                </div>
                <div class="input-label">
                    <label class="primary-label" for="message">Message*</label>
                    <textarea
                            class="primary-textarea"
                            id="message"
                            cols="30"
                            rows="10"
                            v-model="form.message"
                            required
                    ></textarea>
                </div>
                <button class="primary-button-55px" :disabled="isLoading">
                    Submit Question
                </button>
            </form>
            <div class="contacts">
                <div class="contact telephone">
          <span>
            <icon-telephone />
          </span>
                    <p>1-888-397-7749</p>
                </div>
                <div class="contact support">
          <span>
            <icon-envelope />
          </span>
                    <p>support@sprizzy.com</p>
                </div>
                <div class="contact">
          <span>
            <icon-sign />
          </span>
                    <p>
                        717 Fellowship Rd.<br>
                        Suite-G<br>
                        Mt. Laurel, NJ, 08054, USA
                    </p>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
    import HeaderNavBar from "~/components/_shared/HeaderNavBar.vue";
    import Footer from "~/components/_shared/Footer.vue";
    import IconTelephone from "~/components/icons/IconTelephone.vue";
    import IconEnvelope from "~/components/icons/IconEnvelope.vue";
    import IconSign from "~/components/icons/IconSign.vue";
    // import http from "~/utils/http.js";


    export default {
        name: "contact-us",
        components: { HeaderNavBar, Footer, IconTelephone, IconEnvelope, IconSign },
        data() {
            return {
                form: {
                    user_name: "",
                    email: "",
                    url: "",
                    message: ""
                },
                isLoading: false
            };
        },
        methods: {
            submitForm() {


                this.isLoading = true;
                let formData = new URLSearchParams(this.form);
                this.$http
                    .post(`/v2/contact_us`, formData)
                    .then(() => {
                        this.$noty.success("Message sent successfully.");
                        // clear form
                        this.form = {
                            user_name: "",
                            email: "",
                            url: "",
                            message: ""
                        };

                        this.isLoading = false;
                    })
                    .catch(() => {
                        this.$noty.error("Failed send message. Please try again.");
                        this.isLoading = false;
                    });
            }
        }
    }
</script>

<style scoped lang="scss">
    h1 {
        font-size: 40px;
        margin-bottom: 10px;
        @include for-tablet {
            font-size: 72px;
            order: 1;
        }
    }
    .main-text {
        font-family: $font-helvetica;
        font-weight: 300;
        line-height: 27px;
        margin-bottom: 20px;
        letter-spacing: 0.216667px;
        @include for-tablet {
            order: 1;
            width: 488px;
        }
    }
    .contact-us {
        background-color: $bg-light;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .contact-us-main {
        margin-top: 45px;
        padding: 0px 30px 0px 30px;
        display: flex;
        flex-direction: column;

        @include for-tablet {
            padding-left: 40px;
        }
        @include for-desktop {
            max-height: 800px;
            flex-wrap: wrap;
            padding: 0px;
            align-content: center;
        }
    }

    form {
        display: flex;
        flex-direction: column;
        @include for-tablet {
            order: 3;
            width: 416px;
            background-color: white;
            padding: 50px;
            margin-bottom: 80px;
        }
        @include for-desktop {
            order: 0;
            margin-right: 10%;
        }
    }

    .primary-button-55px {
        text-transform: capitalize;
        @include for-tablet {
            width: 80%;
            margin: 0 auto;
        }
    }
    .contacts {
        margin-top: 50px;
        padding-bottom: 20px;
        @include for-tablet {
            order: 2;
            display: flex;
            flex-wrap: wrap;
        }
        @include for-desktop {
            max-width: 532px;
        }
    }
    .contact {
        display: flex;
        align-items: center;
        margin-bottom: 40px;
        font-size: 18px;
        @include for-tablet {
            margin-right: 50px;
        }
        @include for-desktop {
            margin-right: 0px;
        }
        img,
        span {
            padding: 27px;
            background: #ffffff;
            box-shadow: 0px 10px 40px rgba(22, 34, 78, 0.06);
            border-radius: 12px;
            @include for-desktop {
                max-width: 70px;
                padding: 23px;
            }
        }
        p {
            max-width: 220px;
            margin-left: 20px;
            font-weight: 600;
        }
    }
    .telephone {
        margin-right: 50px;
    }
    .primary-textarea {
        margin-bottom: 25px;
    }
</style>