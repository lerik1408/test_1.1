export default {
  methods: {
    createGiftCard(payload) {
      return $http.post("gift-cards", payload);
    },
    fundGiftCard(id, payload) {
      return $http.post(`gift-cards/${id}/fund`, payload);
    }
  }
};
