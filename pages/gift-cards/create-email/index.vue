<template>
  <div class="create-email">
    <HeaderNavBar />

    <form @submit.prevent="goToPayment" class="create-email-main">
      <h1>Create your e-mail message</h1>
      <div class="to-who">
        <p class="prefix">To:</p>
        <div class="two-flex-inputs">
          <BaseInput
            :class="{
              'error required':
                !$v.paymentFormData.toName.required &&
                $v.paymentFormData.toName.$dirty
            }"
            @touch="$v.paymentFormData.toName.$touch"
            required
            v-model="paymentFormData.toName"
            id="recipient-name"
            >Recipient Name</BaseInput
          >

          <BaseInput
            :class="{
              'error required':
                !$v.paymentFormData.toEmail.required &&
                $v.paymentFormData.toEmail.$dirty,
              'error not-valid-email': !$v.paymentFormData.toEmail.email
            }"
            @touch="$v.paymentFormData.toEmail.$touch"
            required
            v-model="paymentFormData.toEmail"
            id="recipient-email-address"
            >Recipient E-mail Address</BaseInput
          >
        </div>
      </div>
      <div class="from-who">
        <p class="prefix">From:</p>
        <div class="two-flex-inputs">
          <BaseInput
            :class="{
              'error required':
                !$v.paymentFormData.fromName.required &&
                $v.paymentFormData.fromName.$dirty
            }"
            @touch="$v.paymentFormData.fromName.$touch"
            required
            v-model="paymentFormData.fromName"
            id="sender-name"
            >Sender Name</BaseInput
          >

          <BaseInput
            :class="{
              'error required':
                !$v.paymentFormData.fromEmail.required &&
                $v.paymentFormData.fromEmail.$dirty,
              'error not-valid-email': !$v.paymentFormData.fromEmail.email
            }"
            @touch="$v.paymentFormData.fromEmail.$touch"
            required
            v-model="paymentFormData.fromEmail"
            id="sender-email-address"
            >Sender E-mail Address</BaseInput
          >
        </div>
      </div>
      <div class="message">
        <label for="message">Message</label>
        <textarea
          class="primary-textarea"
          v-model="paymentFormData.message"
          id="message"
          cols="30"
          rows="10"
        ></textarea>
        <div class="two-flex-inputs date-payment">
          <div class="input-label">
            <label>Delivery Date</label>

            <date-picker
              v-model="paymentFormData.deliveryDate"
              lang="en"
              :not-before="todayDate"
              required
              input-class="primary-input-50px email-date-input"
              :clearable="false"
              :class="{
                'error required':
                  !$v.paymentFormData.deliveryDate.required &&
                  $v.paymentFormData.deliveryDate.$dirty
              }"
            >
              <template v-slot:calendar-icon>
                <icon-calendar class="calendar-icon" />
              </template>
            </date-picker>
          </div>
          <button type="submit" class="primary-button-50px">Continue to Payment</button>
        </div>
      </div>
    </form>
    <Footer />
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
// import GiftCardService from "@/services/GiftCardService";
import HeaderNavBar from "@/components/_shared/HeaderNavBar.vue";
import Footer from "@/components/_shared/Footer.vue";
import IconCalendar from "@/components/icons/IconCalendar.vue";
import BaseInput from "@/components/_shared/BaseInput.vue";

export default {
  // mixins: [GiftCardService],
  components: { HeaderNavBar, Footer, IconCalendar, BaseInput },
  data() {
    return {
      todayDate: new Date(),
      paymentFormData: {}
    };
  },
  methods: {
    async goToPayment() {
      // if ($config.APP_IS_OLD_MODE) {
        this.$v.$touch();
        if (this.$v.$invalid) return false;

        let date = this.paymentFormData.deliveryDate;
        // this.paymentFormData.delivery_date = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
        // let paymentFormData = { ...this.paymentFormData, ...this.$route.params };

        const payload = {
          _package: this.$route.params._package,
          amount: this.$route.params.amount,
          from_name: this.paymentFormData.fromName,
          from_email: this.paymentFormData.fromEmail,
          to_name: this.paymentFormData.toName,
          to_email: this.paymentFormData.toEmail,
          message: this.paymentFormData.message,
          delivery_date: `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
        };

        this.$router.push({ name: "gift-cards-payment", params: payload });
      // } else {
      //   this.$v.$touch();
      //   if (this.$v.$invalid) return false;
      //   const payload = {
      //     type: this.$route.params._package,
      //     amount: this.$route.params.amount,
      //     senderName: this.paymentFormData.fromName,
      //     senderEmail: this.paymentFormData.fromEmail,
      //     recipientName: this.paymentFormData.toName,
      //     recipientEmail: this.paymentFormData.toEmail,
      //     message: this.paymentFormData.message,
      //     deliveryDate: this.paymentFormData.deliveryDate
      //   };
      //   try {
      //     const res = (await this.createGiftCard(payload)).data;
      //     const params = {
      //       giftCardId: res.id,
      //       amount: this.$route.params.amount
      //     };
      //     this.$router.push({name: "payment", params});
      //   } catch (err) {
      //     this.$toastr.error(err.response.data.messages[0], "Error!");
      //   }
      // }
    }
  },
  mounted() {
    if (!this.$route.params.amount) {
      this.$router.push({ name: "gift-cards" });
    }
  },
  validations: {
    paymentFormData: {
      toName: {
        required
      },
      toEmail: {
        required,
        email
      },
      fromName: {
        required
      },
      fromEmail: {
        required,
        email
      },
      deliveryDate: {
        required
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.create-email {
  background: $bg-light;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.create-email-main {
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  padding: 0px 30px 46px 30px;
  h1 {
    margin-bottom: 38px;
    font-size: 24px;
    @include for-desktop {
      font-size: 42px;
      margin-bottom: 21px;
    }
  }
  @include for-tablet {
    width: 687px;
    margin-left: auto;
    margin-right: auto;
    background: white;
    padding: 68px 77px 75px 77px;
    border: 1px solid $hr-color;
    border-radius: 12px;
    margin-bottom: 63px;
  }
  @include for-desktop {
    width: 860px;
    padding-top: 57px;
  }
}
.to-who,
.from-who,
.message {
  display: flex;
  flex-direction: column;
}
.from-who {
  margin-top: 30px;
  @include for-desktop {
    margin-top: 15px;
  }
}
.from-who,
.to-who {
  @include for-desktop {
    flex-direction: row;
    justify-content: space-between;
  }
}
.message {
  margin-top: 40px;
}
.primary-button-50px {
  text-transform: capitalize;
  @include for-tablet {
    width: 246px;
    margin-top: 32px;
  }
  @include for-desktop {
    width: 290px;
  }
}
.prefix {
  color: $blue;
  font-size: 16px;
  font-weight: 900;
  margin-bottom: 9px;
  @include for-desktop {
    min-width: 40px;
    margin-top: 16px;
  }
}
/deep/.primary-input-50px {
  @include for-tablet {
    width: 246px;
  }
  @include for-desktop {
    width: 290px;
  }
}

.date-payment {
  margin-top: 36px;
  @include for-tablet {
    display: flex;
    justify-content: space-between;
  }
  @include for-desktop {
    margin-top: 15px;
  }
}
.message {
  @include for-desktop {
    width: 620px;
    margin-left: 60px;
    margin-top: 15px;
  }
}
/deep/ .date-payment {
  .error {
    input {
      border: 1px solid $error-message-color;
    }
  }
}
</style>
