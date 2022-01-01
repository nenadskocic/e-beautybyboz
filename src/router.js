import Vue from 'vue'
import Router from 'vue-router'
import About from './components/About.vue'
import Testimonals from './components/Testimonals.vue'
import Team from './components/Team.vue'
import Services from './components/Services.vue'
import Shop from './components/Shop.vue'
import Contact from './components/Contact.vue'

export default new Router({
  mode: "history",
  routes: [
      { path: '/', name: 'about', component: About },
      { path: '/aboutus', name: 'about', component: About },
      { path: '/ourteam', name: 'team', component: Team },
      { path: '/testimonals', name: 'testimonals', component: Testimonals },
      { path: '/services', name: 'services', component: Services },
      { path: '/shop', name: 'shop', component: Shop },
      { path: '/contactus', name: 'contact', component: Contact },
    ]
})

Vue.use(Router)