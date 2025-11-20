<template>
  <section id="NavBar" class="Navbar">
    <nav class="navbar">
      <div class="container">
        <div class="brand">
          <router-link to="/" class="logo">
            <svg viewBox="0 0 24 24" class="coffee-icon" aria-hidden="true">
              <path d="M3 3h14v2a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6V3z" fill="currentColor" />
              <path
                d="M5 13a4 4 0 0 0 4 4h6a5 5 0 0 0 5-5v-1"
                stroke="currentColor"
                stroke-width="1"
                fill="none"
              />
            </svg>
            <span class="title">Coffee Shop</span>
          </router-link>
        </div>

        <button
          class="toggle"
          @click="isOpen = !isOpen"
          :aria-expanded="isOpen"
          aria-label="Toggle navigation"
        >
          <svg v-if="!isOpen" viewBox="0 0 24 24" class="icon">
            <path
              d="M3 6h18M3 12h18M3 18h18"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
          <svg v-else viewBox="0 0 24 24" class="icon">
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </button>

        <div :class="['links', { open: isOpen }]">
          <ul class="nav-links" @click="isOpen = false">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/shop">Shop</router-link></li>
            <li><router-link to="/beans">Beans</router-link></li>
            <li><router-link to="/accessories">Accessories</router-link></li>
            <li><router-link to="/about">About</router-link></li>
          </ul>

          <form class="search" @submit.prevent="onSearch">
            <input
              v-model="query"
              type="search"
              placeholder="Search coffee, beans, gear..."
              aria-label="Search products"
            />
            <button type="submit" aria-label="Search">
              <svg viewBox="0 0 24 24" class="icon">
                <path
                  d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="none"
                />
              </svg>
            </button>
          </form>

          <div class="actions">
            <router-link to="/cart" class="cart" aria-label="View cart">
              <svg viewBox="0 0 24 24" class="icon">
                <path
                  d="M6 6h15l-1.5 9h-12L6 6z"
                  stroke="currentColor"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="none"
                />
                <circle cx="10" cy="20" r="1" fill="currentColor" />
                <circle cx="18" cy="20" r="1" fill="currentColor" />
              </svg>
              <span class="cart-count" v-if="cartCount">{{ cartCount }}</span>
            </router-link>

            <router-link to="/account" class="account">Sign in</router-link>
          </div>
        </div>
      </div>
    </nav>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineOptions({ name: 'AppNavbar' })

defineProps<{ cartCount?: number }>()

const emit = defineEmits(['search'])

const isOpen = ref(false)
const query = ref('')

function onSearch() {
  emit('search', query.value.trim())
  // keep search input for convenience on mobile/desktop
}
</script>

<style scoped>
:root {
  --brown-900: #3b2f2f;
  --brown-700: #6b4f4f;
  --accent: #d77b2b;
  --muted: #f4f1ee;
}

.navbar {
  background: linear-gradient(180deg, var(--brown-900), var(--brown-700));
  color: var(--muted);
  padding: 0.5rem 1rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  position: sticky;
  top: 0;
  z-index: 30;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
}

.brand {
  display: flex;
  align-items: center;
}

.logo {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  color: var(--muted);
  text-decoration: none;
  font-weight: 700;
  letter-spacing: 0.4px;
}

.coffee-icon {
  width: 36px;
  height: 36px;
  color: var(--accent);
}

.title {
  font-size: 1.1rem;
}

.toggle {
  display: none;
  background: transparent;
  border: none;
  color: var(--muted);
  cursor: pointer;
}

.icon {
  width: 20px;
  height: 20px;
}

.links {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 0.75rem;
  padding: 0;
  margin: 0;
  align-items: center;
}

.nav-links a {
  color: var(--muted);
  text-decoration: none;
  padding: 6px 10px;
  border-radius: 6px;
  transition: background 120ms;
  font-weight: 500;
  font-size: 0.95rem;
}

.nav-links a:hover {
  background: rgba(255, 255, 255, 0.04);
}

.search {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.search input {
  padding: 6px 10px;
  border-radius: 22px;
  border: none;
  outline: none;
  min-width: 180px;
  background: rgba(255, 255, 255, 0.06);
  color: var(--muted);
}

.search button {
  background: var(--accent);
  border: none;
  color: white;
  padding: 6px 10px;
  border-radius: 8px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
}

.actions {
  display: flex;
  gap: 0.75rem;
  align-items: center;
  margin-left: 0.5rem;
}

.cart {
  position: relative;
  color: var(--muted);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 6px;
  border-radius: 6px;
}

.cart-count {
  position: absolute;
  top: -6px;
  right: -6px;
  background: #ff5a3c;
  color: white;
  font-size: 0.72rem;
  padding: 2px 6px;
  border-radius: 999px;
  font-weight: 700;
}

.account {
  color: var(--muted);
  text-decoration: none;
  padding: 6px 10px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
}

/* Responsive */
@media (max-width: 880px) {
  .toggle {
    display: inline-flex;
  }

  .links {
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;
    background: linear-gradient(180deg, var(--brown-900), var(--brown-700));
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.7rem 1rem;
    transform: translateY(-10px);
    opacity: 0;
    pointer-events: none;
    transition: all 160ms ease;
    border-top: 1px solid rgba(255, 255, 255, 0.03);
  }

  .links.open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }

  .nav-links {
    flex-direction: column;
    width: 100%;
  }

  .search input {
    min-width: 100%;
  }

  .actions {
    width: 100%;
    justify-content: space-between;
  }
}
</style>
