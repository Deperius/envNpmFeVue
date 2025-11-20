<template>
  <!--
    <h1>You did it!</h1>
    <p>
      Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
      documentation
    </p>
    -->

  <Navbar />
  <Hero />
  <About />
  <Footer />
  <!--


    -->
</template>

<script setup lang="ts">
// @ts-expect-error: no declaration file for .vue imports
import Navbar from './Components/Navbar.vue'
// @ts-expect-error: no declaration file for .vue imports
import Hero from './Components/Hero.vue'
import About from './Components/About.vue'
// @ts-expect-error: no declaration file for .vue imports
import Footer from './Components/Footer.vue'
</script>
<style scoped></style>
