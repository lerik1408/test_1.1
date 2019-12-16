<template>
  <div class="payment">
    <HeaderNavBar />
    <div class="payment-main">
      <div class="payment-header">
        <h1>Payment</h1>
        <!--<p class="credit-card-note">-->
          <!--Please Note: If you are not in the USA, this option may not work for-->
          <!--you. Please use your credit card in PayPal instead.-->
        <!--</p>-->
        <nav class="payment-filter">
          <input
            required
            type="radio"
            value="card"
            v-model="paymentFormData.typePayment"
            id="card-radio"
          />
          <label
            for="card-radio"
            class="payment-label"
            :class="{ active: paymentFormData.typePayment === 'card' }"
            >Credit Card</label
          >
          <input
            required
            type="radio"
            v-model="paymentFormData.typePayment"
            value="paypal"
            id="paypal-radio"
          />
          <label
            for="paypal-radio"
            class="payment-label"
            :class="{ active: paymentFormData.typePayment === 'paypal' }"
            >Paypal</label
          >
        </nav>
      </div>

      <PaymentForm
        ref="paymentForm"
        v-model="paymentFormData"
        v-if="paymentFormData.typePayment === 'card'"
      />

      <section class="submit-payment">
        <p class="payment-amount">
          Payment Amount:
          <span>${{ amount }}.00</span>
        </p>
        <button
          type="submit"
          class="primary-button-55px"
          @click="proceedPayment"
          :disabled="isLoading"
        >
          Proceed Payment
        </button>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
import moment from "moment";
// import GiftCardService from "@/services/GiftCardService";
import HeaderNavBar from "@/components/_shared/HeaderNavBar.vue";
import Footer from "@/components/_shared/Footer.vue";
import PaymentForm from "@/components/_shared/PaymentForm.vue";

export default {
  // mixins: [GiftCardService],
  components: {
    HeaderNavBar,
    Footer,
    PaymentForm
  },
  data() {
    return {
      paymentFormData: {
        typePayment: "card",
        card_country: "USA"
      },
      isLoading: false
    };
  },
  computed: {
    amount() {
      return this.$route.params.amount;
    }
  },
  methods: {
    async proceedPayment() {
      // if ($config.APP_IS_OLD_MODE) {
        // validate Payment Form
        if (this.paymentFormData.typePayment === "card") {
          this.$refs.paymentForm.$v.$touch();
          if (this.$refs.paymentForm.$v.$invalid) return false;
        }

        let paymentFormData = {
          ...this.paymentFormData,
          ...this.$route.params
        };
        if (this.paymentFormData.date) {
          paymentFormData.card_month = this.paymentFormData.date.getMonth() + 1;
          paymentFormData.card_year = this.paymentFormData.date.getFullYear();
        }
        paymentFormData.timezone = -new Date().getTimezoneOffset();
        // paymentFormData = new URLSearchParams(paymentFormData);

        this.isLoading = true;
        this.$http.post(`/v1/gift-cards`, paymentFormData).then(res => {
          if (res.data.success) {
            // redirect to the PayPal page
            if (this.paymentFormData.typePayment === "paypal") {
              window.location = res.data.url;
            } else {
              this.$router.push({
                name: "gift-cards-paid",
                params: { id: res.data.id }
              });
              // console.log(res);
            }
          } else {
            if (res.data.message) {
              this.$noty.error(res.data.message);
            } else if (res.data.error && res.data.error[0]) {
              this.$noty.error(res.data.error[0].msg);
            }
          }
          this.isLoading = false;
        });
      // } else {
      //   // validate Payment Form
      //   if (this.paymentFormData.typePayment === "card") {
      //     this.$refs.paymentForm.$v.$touch();
      //     if (this.$refs.paymentForm.$v.$invalid) return false;
      //     const payload = {
      //       firstName: this.paymentFormData.card_first_name,
      //       lastName: this.paymentFormData.card_last_name,
      //       address: this.paymentFormData.card_address,
      //       city: this.paymentFormData.card_city,
      //       state: this.paymentFormData.card_state,
      //       zip: this.paymentFormData.card_zip,
      //       country: this.paymentFormData.card_country,
      //       cardNumber: this.paymentFormData.card_number,
      //       cardCvv: this.paymentFormData.card_code,
      //       cardExpiration: moment(this.paymentFormData.date).format("MMYY")
      //     };
      //     try {
      //       await this.fundGiftCard(this.$route.params.giftCardId, payload);
      //       this.$router.push({ name: "paymentPaid" });
      //     } catch (err) {
      //       this.$toastr.error(err.response.data.messages[0], "Error!");
      //     }
      //   } else {
      //     const wrapper = document.createElement("div");
      //     wrapper.innerHTML = `
      //     <form id="paypalForm" action="${
      //       $config.PAYPAL_API_URL
      //     }/cgi-bin/webscr" method="post">
      //       <input type="hidden" name="cmd" value="_xclick">
      //       <input type="hidden" name="business" value="${
      //         $config.PAYPAL_BUSINESS_NAME
      //       }">
      //       <input type="hidden" name="item_name" value="Gift Card">
      //       <input type="hidden" name="item_number" value="000">
      //       <input type="hidden" name="amount" value="${this.amount}">
      //       <input type="hidden" name="currency_code" value="USD">
      //       <input type="hidden" name="custom" value="GIFT_CARD.${
      //         this.$route.params.giftCardId
      //       }">
      //       <input type="hidden" name="cancel_return" value="${
      //         $config.APP_BASE_URL
      //       }/gift-cards">
      //       <input type="hidden" name="return" value="${
      //         $config.APP_BASE_URL
      //       }/gift-cards/payment/paid">
      //       <input type="hidden" name="notify_url" value="">
      //       <input type="image" src="https://www.paypal.com/en_AU/i/btn/btn_buynow_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online.">
      //       <img alt="" border="0" src="https://www.paypal.com/en_AU/i/scr/pixel.gif" width="1" height="1">
      //     </form>
      //   `;
      //     document.body.appendChild(wrapper);
      //     document.getElementById("paypalForm").submit();
      //   }
      // }
    }
  },
  created() {
    if (!this.amount) {
      this.$router.push("/gift-cards");
    }
  }
};
</script>
<style lang="scss" scoped>
.payment {
  background: $bg-light;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}

.payment-main {
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  padding: 0px 30px 46px 30px;
  h1 {
    margin-bottom: 38px;
    font-size: 24px;
    @include for-tablet {
      margin-bottom: 0;
      font-size: 34px;
    }
    @include for-desktop {
      font-size: 42px;
      margin-bottom: 21px;
    }
  }
  @include for-tablet {
    width: 687px;
    margin-bottom: 63px;
    margin-left: auto;
    margin-right: auto;
    background: white;
    padding: 68px 77px 75px 77px;
    border: 1px solid $hr-color;
    border-radius: 12px;
  }
  @include for-desktop {
    width: 786px;
    padding-top: 57px;
  }
}
.credit-card-note {
  font-size: 14px;
  font-family: $font-helvetica;
  font-weight: 300;
  @include for-tablet {
    display: none;
  }
  @include for-desktop {
    display: block;
    order: 5;
    max-width: 420px;
  }
}
.payment-header {
  @include for-tablet {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  @include for-desktop {
    padding-left: 14px;
    padding-right: 14px;
  }
}
.address,
.card {
  margin-top: 47px;
}
/deep/.security-date {
  display: flex;
  justify-content: space-between;
  @include for-tablet {
    max-width: 256px;
  }
  @include for-desktop {
    max-width: 290px;
  }
}

.primary-button-55px {
  padding-top: 0px;
  text-transform: capitalize;
  outline: none;
  border: none;
  width: 100%;
  max-width: 314px;
  margin: 0 auto;
  @include for-tablet {
    max-width: 256px;
    margin: 0;
  }
  @include for-desktop {
    min-width: 290px;
  }
}
.submit-payment {
  margin-top: 51px;
  @include for-tablet {
    display: flex;
    justify-content: space-between;
  }
  @include for-desktop {
    padding-left: 14px;
    padding-right: 14px;
  }
}
.payment-amount {
  color: #7f92ab;
  margin-bottom: 16px;
  @include for-tablet {
    font-size: 18px;
  }
  @include for-desktop {
    display: flex;
    align-items: center;
  }
  span {
    color: #3074e4;
    font-size: 28px;
    font-weight: 600;
    @include for-tablet {
      display: block;
    }
    @include for-desktop {
      margin-left: 15px;
    }
  }
}
input[type="radio"] {
  display: none;
}
.payment-filter {
  margin-top: 30px;
  @include for-tablet {
    margin-top: 0;
  }
}
.payment-label {
  padding: 10px;
  cursor: pointer;
  margin-right: 20px;
  @include for-desktop {
    margin-right: 0;
    margin-left: 20px;
  }
}
form {
  margin-top: 55px;
  @include for-desktop {
    margin-top: 30px;
  }
}

/deep/ .primary-input-50px {
  @include for-tablet {
    width: 256px;
  }
  @include for-desktop {
    width: 290px;
  }
}
/deep/ .security,
.date {
  width: 49%;
  max-width: 151px;
  @include for-tablet {
    .primary-input-50px {
      max-width: 120px;
    }
  }
  @include for-desktop {
    .primary-input-50px {
      max-width: 135px;
    }
  }
}
</style>
