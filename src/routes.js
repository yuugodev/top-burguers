import Home from './components/Home.vue'
import Menu from './components/Menu.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'

export default [
  {path: '/', component: Home},
  {path: '/menu', component: Menu},
  {path: '/about', component: About},
  {path: '/contact', component: Contact}
]