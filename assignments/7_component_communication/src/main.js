import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    showId(id) {
      this.$emit('showFuckinId', id);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
