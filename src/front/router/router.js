import Vue from "vue"
import VueRouter from "vue-router";
import Home from "../pages/Home.vue"
import Home2 from "../pages/Home2.vue"

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/:user', component: Home }
    ]
});