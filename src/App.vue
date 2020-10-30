<template>
  <div id="app" class="flex">
    <nav v-if="isMobile()" class="main-nav">
     <div class="logo">
       my.company
     </div>
     <Burger></Burger>
   </nav>
    <Sidebar>
      <ul class="sidebar-panel-nav">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/menu">Cardápio</router-link></li>
        <li><router-link to="/about">Sobre</router-link></li>
        <li><router-link to="/contact">Contato</router-link></li>
      </ul>
   </Sidebar>
   <div>
     <router-view class="main-content" :class="{'space': space}"></router-view>
   </div>
   
  </div>
</template>

<script>
  import Burger from './components/Sidebar/Burguer.vue';
  import Sidebar from './components/Sidebar/Sidebar.vue';
  import { store } from '@/store.js'

export default {
 name: 'app',
 components: {
   Burger,
   Sidebar
 },
 data() {
   return {
     space: false
   }

 },
 methods: {
    isMobile() {
      if(window.innerWidth <= 760) {
        console.log("mobile")
        store.isNavOpen = false;
        return true
      } else {
        console.log("desktop")
        this.space = true;
        store.isNavOpen = true;
        return false
      }
    }
 }
}
</script>
<style>
html {
   height: 100%;
   overflow:hidden;
 }

 body {
   border: 0; margin: 0; padding: 0;
   height: 100%;
   background-color: #000;
   font-family: 'Lato';
   color: #fff;
   overflow-x: hidden
 }

 .logo {
   align-self: center;
   color: #fff;
   font-weight: bold;
   
 }

 .main-nav {
   display: flex;
   justify-content: space-between;
   padding: 0.5rem 0.8rem;
 }

 ul.sidebar-panel-nav {
   list-style-type: none;
 }

 ul.sidebar-panel-nav > li > a {
   color: #fff;
   text-decoration: none;
   font-size: 1.5rem;
   display: block;
   padding-bottom: 0.5em;
 }

 .main-content {
   background-color: red;
   
 }

 .space {
   margin: 10px;
   margin-left: 300px;
   width: 50%;
   
 }
</style>