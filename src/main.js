import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'


Vue.use(VueRouter)
Vue.use(VueResource)

Vue.http.options.xhr = { withCredentials: true }

// post的时候会把JSON对象转成formdata
Vue.http.options.emulateJSON=true;



window.Vue = Vue

var router = new VueRouter({
  hashbang:false,
  history:true
});





router.map({
    '/': {
      component: require('./components/Index.vue')
    },
    '/register-for-phone': {
        component: require('./components/RegisterForPhone.vue')
    },
    '/register-for-email': {
        component: require('./components/RegisterForEmail.vue')
    },
    '/login': {
        component: require('./components/Login.vue')
    },
    '/find-password':{
        component: require('./components/FindPassword.vue')
    },
    '/main': {
        component: require('./components/Main.vue'),
        auth: true,
        subRoutes: {
          '/': {
            component:require('./components/main/AddOne.vue')
          },
          'bill-query':{
            component:require('./components/main/BillQuery.vue')
          }
        }
    }
})

router.beforeEach((transition) => {
  if (transition.to.auth) {
    //let redirect = encodeURIComponent(transition.to.path);
    transition.redirect('/login');
  } else {
    transition.next();
  }
})

router.start(require('./App.vue'), '#app')
