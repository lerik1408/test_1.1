<template>
  <div class="custom-package">
    <div class="heading-input-button">
      <h2>or Build Your Own Gift Package</h2>
      <div class="input-button">
        <div class="input-w-arrows">
          <div>
            <span class="dollar">$</span>
            <input
              v-model.number="cashAmount"
              @change="validateInputAndCountAmount"
              class="primary-input-55px"
              type="number"
              value="25"
            />
          </div>
          <div class="arrows">
            <span class="arrow" @click.prevent="increaseCashAmount">
              <icon-arrow-up />
            </span>
            <span class="arrow" @click.prevent="decreaseCashAmount">
              <icon-arrow-down />
            </span>
          </div>
        </div>
        <button @click.prevent="goToPayment" class="primary-button-55px">
          SELECT
        </button>
      </div>
    </div>
    <hr />
    <div class="options">
      <div class="option">
        <icon-checked />
        <p>
          The YouTuber can promote up to
          <span>{{ videosAmount }}</span> of their videos
        </p>
      </div>
      <div class="option">
        <icon-checked />
        <p>
          The promoted videos will receive a combined total of
          <span>{{ viewsAmount }}</span> views
        </p>
      </div>
      <div class="option">
        <icon-checked />
        <p>
          Promotional campaigns will be optimized to generate comments, likes,
          and subscribers.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import IconChecked from "@/components/icons/IconChecked.vue";
import IconArrowDown from "@/components/icons/IconArrowDown.vue";
import IconArrowUp from "@/components/icons/IconArrowUp.vue";
export default {
  components: { IconChecked, IconArrowDown, IconArrowUp },
  data() {
    return {
      cashAmount: 25,
      videosAmount: 1,
      viewsAmount: 1000
    };
  },
  methods: {
    increaseCashAmount() {
      if (this.cashAmount >= 1000) return;
      this.cashAmount = this.cashAmount + 5;
    },
    decreaseCashAmount() {
      if (this.cashAmount <= 25) return;
      this.cashAmount = this.cashAmount - 5;
    },
    goToPayment() {
      let paymentFormData = {};
      paymentFormData._package = "custom";
      paymentFormData.amount = this.cashAmount;

      this.$router.push({ name: "gift-cards-create-email", params: paymentFormData });
    },
    validateInputAndCountAmount() {
      if (this.cashAmount > 1000) this.cashAmount = 1000;
      if (this.cashAmount < 25) this.cashAmount = 25;
      this.videosAmount = Math.floor(this.cashAmount / 25);
      this.viewsAmount = this.cashAmount * 40;
    }
  },
  watch: {
    cashAmount: function() {}
  }
};
</script>
<style lang="scss" scoped>
.custom-package {
  margin: 0 auto;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  max-width: 90%;
  height: 578.8px;
  padding: 48px 26px 36px 26px;
  box-shadow: 0px 10px 40px rgba(22, 34, 78, 0.06);
  border-radius: 20px;
  @include for-tablet {
    width: 660px;
    height: 662px;
    padding: 60px 125px 70px 70px;
  }
  @include for-desktop {
    width: 1068px;
    height: 389px;
    flex-direction: row;
    align-items: flex-start;
    padding: 106px 57px 82px 80px;
  }
}
.input-button {
  display: flex;
  flex-direction: column;

  @include for-tablet {
    flex-direction: row;
    margin-top: 45px;
  }
}
.input-w-arrows {
  position: relative;
}
.dollar {
  position: absolute;
  font-size: 16px;
  top: 19px;
  left: 10px;
  color: #3E3F51;
  font-weight: normal;
}
.primary-input-55px,
.primary-button-55px {
  width: 259.62px;
  @include for-tablet {
    width: 179px;
    margin-right: 10px;
  }
}
.primary-input-55px {
  margin-bottom: 15px;
}
.primary-button-55px {
  margin-bottom: 47px;
}
h2 {
  font-weight: 900;
  font-size: 30px;
  text-align: center;
  margin-bottom: 20px;
  @include for-tablet {
    text-align: left;
    font-size: 44px;
  }
}
.options {
  @include for-tablet {
    margin-top: 41px;
  }
  @include for-desktop {
    margin-top: 0px;
    padding-left: 50px;
    border-left: 1px solid #e8edf5;
  }
}
.option {
  margin-bottom: 23px;
  display: flex;

  svg {
    align-self: center;
    min-width: 20px;
    max-width: 20px;
    margin-right: 26px;
    @include for-desktop {
      margin-right: 22px;
    }
  }

  p {
    color: #808190;
    font-size: 14px;
    line-height: 24px;
    @include for-tablet {
      font-size: 18px;
    }
    @include for-desktop {
      text-align: left;
      line-height: 31px;
    }
  }
}

hr {
  display: none;
  @include for-tablet {
    display: block;
    min-width: 465px;
  }
  @include for-desktop {
    display: none;
  }
}
.heading-input-button {
  @include for-desktop {
    margin-right: 50px;
  }
}
span {
  color: $blue;
  font-weight: 600;
}
.arrows {
  position: absolute;
  top: 10%;
  left: 80%;
}
.arrow {
  display: block;
}
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
</style>
