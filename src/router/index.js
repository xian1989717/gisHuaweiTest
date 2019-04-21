import Vue from 'vue';
import Router from 'vue-router';
import '../assets/css/base.css';
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import GIS_C from '@/components/gisCDomain';



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
