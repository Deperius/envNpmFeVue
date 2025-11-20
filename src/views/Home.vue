<template>
  <div>
    <Hero />
    <About />
    <Footer />
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'HomeView' })

import Hero from '../Components/Hero.vue'
import About from '../Components/About.vue'
import Footer from '../Components/Footer.vue'
</script>
