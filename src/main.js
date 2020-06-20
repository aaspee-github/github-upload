import Vue from 'vue';
import App from './App.vue';
import TicTacToe from './TicTacToe.vue';
import Cell from './Cell.vue';

// Vue.config.productionTip = false

Vue.component('tic-tac-toe', TicTacToe);
Vue.component('cell', Cell);

new Vue({
  el: '#app',
  render: h => h(App),
});