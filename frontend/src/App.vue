<script setup>
import { RouterLink, RouterView } from 'vue-router'
import headerComponent from './components/headerComponent.vue'
import footerComponent from './components/footerComponent.vue';
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

   -->

  <div>
    <headerComponent/>
    <main>
      <RouterView />
    </main>
    <footerComponent/>
  </div>
  

</template>

<style scoped>
  main{
    height: 88vh;
  }
</style>


