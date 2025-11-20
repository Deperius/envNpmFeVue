<template>
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <h1>Wake Up & Smell the Coffee</h1>
        <p>Freshly roasted beans, brewed to perfection. Delivered straight to your door.</p>
        <div class="hero-buttons">
          <router-link to="/shop" class="btn btn-primary">Shop Now</router-link>
          <router-link to="/about" class="btn btn-outline">Learn More</router-link>
        </div>
      </div>
      <div class="hero-image">
        <img src="/src/assets/coffee-cup.png" alt="Coffee cup" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineOptions({ name: 'HeroSection' })
// Nothing dynamic for now
</script>

<style scoped>
:root {
  --brown-900: #3b2f2f;
  --brown-700: #6b4f4f;
  --accent: #d77b2b;
  --muted: #f4f1ee;
}

.hero {
  background: linear-gradient(180deg, var(--brown-900), var(--brown-700));
  color: var(--muted);
  padding: 6rem 1rem;
  text-align: center;
}

.container {
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
  gap: 2rem;
}

.hero-content h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-family: 'Pacifico', cursive;
}

.hero-content p {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  max-width: 500px;
}

.hero-buttons .btn {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  margin-right: 0.75rem;
  font-weight: 600;
  text-decoration: none;
}

.btn-primary {
  background-color: var(--accent);
  color: var(--muted);
  border: none;
}

.btn-outline {
  background: transparent;
  border: 2px solid var(--muted);
  color: var(--muted);
}

.hero-image img {
  width: 300px;
  max-width: 90%;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
}

/* Responsive */
@media (min-width: 768px) {
  .container {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }

  .hero-content h1 {
    font-size: 3.5rem;
  }
}
</style>
