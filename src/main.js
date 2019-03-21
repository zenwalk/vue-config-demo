import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

export function main({ locale, baseURL }) {
    console.log(locale);
    console.log(baseURL);
    new Vue({
        render: h => h(App),
    }).$mount('#app');
}
