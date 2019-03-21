```javascript
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
```

```html
<div id="app"></div>
<!-- built files will be auto injected -->
<script>
    window.addEventListener('DOMContentLoaded', function() {
        console.log('DOM fully loaded and parsed');
        MyApp.main({ locale: 'en', baseURL: 'aa' });
    });
</script>
```
