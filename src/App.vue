<template>
  <div id="app" class="flex">
    <nav class="main-nav">
     <div class="logo">
       my.company
     </div>
     <Burger v-if="isMobile()"></Burger>
   </nav>
    <Sidebar>
      <ul class="sidebar-panel-nav">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
   </Sidebar>
   <Home class="main-content" :class="{'space': isMobile}"/>
  </div>
</template>

<script>
  import Burger from './components/Sidebar/Burguer.vue';
  import Sidebar from './components/Sidebar/Sidebar.vue';
  import Home from './components/Home.vue'
  import { store } from '@/store.js'

export default {
 name: 'app',
 components: {
   Burger,
   Sidebar,
   Home
 },
 data() {
   return {

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
   width: 100%;
   background-color: red;
 }

 .space {
   margin-left: 300px;
   
 }
</style>