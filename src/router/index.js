import Vue from 'vue';
import Router from 'vue-router';
import GIS_C from '@/components/GIS_C';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Router);
Vue.use(ElementUI);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GIS_C',
      component: GIS_C
    }
  ]
});
