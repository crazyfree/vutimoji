import Vue from 'vue';
import vutimoji from '../src/main.js';
Vue.use(vutimoji);

import TestComponent from './TestComponent.vue';
Vue.component('test-component', TestComponent);

new Vue({
    el: "#anchor"
});

