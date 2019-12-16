<template>
  <div>
    <div class="question">
      <span v-if="!showAnswer" class="plus" @click="showAnswer = true">
        <icon-plus />
      </span>
      <span v-if="showAnswer" class="minus" @click="showAnswer = false">
        <icon-minus />
      </span>
      <p class="question-title" @click="showAnswer = !showAnswer">{{ qa.question }}</p>
    </div>
    <p v-if="showAnswer" v-html="qa.answer" class="answer">{{ qa.answer }}</p>
  </div>
</template>
<script>
import IconPlus from "@/components/icons/IconPlus.vue";
import IconMinus from "@/components/icons/IconMinus.vue";
export default {
  components: {
    IconPlus,
    IconMinus
  },
  data() {
    return {
      showAnswer: null
    };
  },
  props: {
    qa: {
      question: String,
      answer: String
    }
  },
  created() {
    this.showAnswer = this.qa.question == "What is Sprizzy?";
  }
};
</script>
<style lang="scss" scoped>
.question {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  margin-top: 15px;
  p {
    font-size: 18px;
    font-weight: 600;
    margin-left: 40px;
  }
  @include for-tablet {
    margin: 20px 0;
  }
}
.question-title {
  cursor: pointer;
}
//
.minus,
.plus {
  cursor: pointer;
}
.answer {
  margin-bottom: 38px;
  margin-left: 60px;
  font-family: $font-helvetica;
  font-weight: 300;
  font-size: 14px;
  line-height: 25px;
  @include for-tablet {
    font-size: 15px;
  }
}
</style>
