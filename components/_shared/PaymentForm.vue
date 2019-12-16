<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <form>
    <section class="two-flex-inputs">
      <BaseInput
        :class="{
          'error required':
            !$v.value.card_first_name.required &&
            $v.value.card_first_name.$dirty
        }"
        required
        id="first-name"
        v-model="value.card_first_name"
        @touch="$v.value.card_first_name.$touch"
        >First Name</BaseInput
      >
      <BaseInput
        v-model="value.card_last_name"
        id="last-name"
        required
        :class="{
          'error required':
            !$v.value.card_last_name.required && $v.value.card_last_name.$dirty
        }"
        @touch="$v.value.card_last_name.$touch"
        >Last Name</BaseInput
      >
    </section>
    <section class="address">
      <div class="two-flex-inputs">
        <PaymentCountrySelect id="card-country" v-model="value.card_country">
        </PaymentCountrySelect>

        <BaseInput
          v-model="value.card_state"
          id="card-state"
          :class="{
            'error required':
              !$v.value.card_state.required && $v.value.card_state.$dirty
          }"
          @touch="$v.value.card_state.$touch"
          >State</BaseInput
        >
      </div>
      <div class="two-flex-inputs">
        <BaseInput
          v-model="value.card_address"
          id="card-address"
          :class="{
            'error required':
              !$v.value.card_address.required && $v.value.card_address.$dirty
          }"
          @touch="$v.value.card_address.$touch"
          >Address</BaseInput
        >
        <div class="city-zip">
          <BaseInput
            v-model="value.card_city"
            id="card-city"
            :class="{
              'error required':
                !$v.value.card_city.required && $v.value.card_city.$dirty
            }"
            @touch="$v.value.card_city.$touch"
            >City</BaseInput
          >
          <BaseInput
            v-model="value.card_zip"
            id="card-zip"
            :class="{
              'error required':
                !$v.value.card_zip.required && $v.value.card_zip.$dirty
            }"
            @touch="$v.value.card_zip.$touch"
            >ZIP</BaseInput
          >
        </div>
      </div>
    </section>
    <section class="card two-flex-inputs">
      <BaseInput
        id="card-number"
        :class="{
          error: $v.value.card_number.$error,
          required:
            !$v.value.card_number.required && $v.value.card_number.$dirty,
          'not-number': !$v.value.card_number.numeric
        }"
        @touch="$v.value.card_number.$touch"
        placeholder="XXXX XXXX XXXX XXXX"
        v-model="value.card_number"
        pattern="[0-9]{13,16}"
        type="number"
      >
        Card Number
        <span class="min-length-hint" v-if="!$v.value.card_number.minLength">
          minimal length is
          {{ $v.value.card_number.$params.minLength.min }}
        </span>
      </BaseInput>

      <div class="security-date">
        <div class="security">
          <BaseInput
            :class="{
              error: $v.value.card_code.$error,
              required:
                !$v.value.card_code.required && $v.value.card_code.$dirty,
              'not-number': !$v.value.card_code.numeric
            }"
            @touch="$v.value.card_code.$touch"
            v-model="value.card_code"
            id="card-code"
            pattern="[0-9]\d\d+"
            type="number"
            >CVV</BaseInput
          >
        </div>
        <div class="input-label date">
          <label class="primary-label" for>Expiry Date*</label>

          <date-picker
            v-model="value.date"
            lang="en"
            input-class="primary-input-50px payment-date-input"
            type="month"
            format="YYYY-MM"
            :clearable="false"
            :class="{
              'error required': !$v.value.date.required && $v.value.date.$dirty
            }"
          >
            <template v-slot:calendar-icon>
              <icon-calendar class="calendar-icon" />
            </template>
          </date-picker>
        </div>
      </div>
    </section>
  </form>
</template>
<script>
import BaseInput from "@/components/_shared/BaseInput.vue";
import PaymentCountrySelect from "@/components/_shared/PaymentCountriesSelect.vue";
import IconCalendar from "@/components/icons/IconCalendar.vue";
import { required, numeric, minLength } from "vuelidate/lib/validators";
export default {
  components: { BaseInput, IconCalendar, PaymentCountrySelect },
  data() {
    return {
      date: null,
      amount: null
    };
  },
  props: ["value"],
  watch: {
    $v: {
      handler() {
        if (this.$v.$invalid) {
          this.$emit("validate", false);
        } else {
          this.$emit("validate", true);
        }
      },
      deep: true
    }
  },
  validations: {
    value: {
      card_first_name: {
        required
      },
      card_last_name: {
        required
      },
      card_address: {
        required
      },
      card_city: {
        required
      },
      card_state: {
        required
      },
      card_zip: {
        required
      },
      card_number: {
        required,
        numeric,
        minLength: minLength(10)
      },
      card_code: {
        required,
        numeric,
        minLength: minLength(2)
      },
      date: {
        required
      },
      card_country: {
        required
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.security-date {
  display: flex;
  justify-content: space-between;
  @include for-tablet {
    width: 290px;
  }
}
/deep/ .security,
.date {
  width: 49%;
  max-width: 161px;
  @include for-tablet {
    .primary-input-50px {
      max-width: 130px;
    }
  }
  @include for-desktop {
    .primary-input-50px {
      max-width: 135px;
    }
  }
}
.min-length-hint {
  color: lightgray;
}
/deep/.primary-input-50px {
  @include for-tablet {
    width: 290px;
  }
  @include for-desktop {
    width: 290px;
  }
}
form {
  margin-bottom: 20px;
  @include for-desktop {
    width: 604px;
    margin: 0 auto;
  }
}

/deep/ .city-zip {
  display: flex;
  width: 290px;
  justify-content: space-between;
}

/deep/ #card-city {
  max-width: 138px;
}
/deep/ #card-zip {
  max-width: 138px;
}

/deep/ .date {
  .error {
    input {
      border: 1px solid $error-message-color;
    }
  }
}
</style>
