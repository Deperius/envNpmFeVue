<template>
  <section id="about" class="about">
    <div class="container">
      <div class="about-content">
        <h2>Our Story</h2>
        <p>
          At Coffee Shop, we believe that every cup of coffee tells a story. From the finest beans
          sourced responsibly around the world to roasting them to perfection, our mission is to
          bring warmth, comfort, and joy to every sip.
        </p>
        <p>
          Whether you're enjoying a quiet morning alone or sharing a moment with friends, our coffee
          is crafted to elevate your day.
        </p>
        <router-link to="/about" class="btn btn-primary">Learn More</router-link>
      </div>
      <div class="about-image">
        <img src="/src/assets/coffee_beans.jpg" alt="Coffee beans" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: 'AboutSection',
}
</script>

<style scoped>
.about {
  padding: 6rem 1rem;
  background: #f4f1ee; /* muted cream color */
  color: #3b2f2f; /* dark brown */
}

.container {
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
  gap: 2rem;
}

.about-content h2 {
  font-size: 2rem;
  font-family: 'Pacifico', cursive;
  margin-bottom: 1rem;
}

.about-content p {
  font-size: 1rem;
  margin-bottom: 1rem;
  line-height: 1.6;
  max-width: 500px;
}

.btn-primary {
  background-color: #d77b2b;
  color: #f4f1ee;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
}

.about-image img {
  width: 300px;
  max-width: 90%;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

/* Responsive */
@media (min-width: 768px) {
  .container {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }

  .about-content h2 {
    font-size: 2.5rem;
  }
}
</style>
