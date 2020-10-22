<template>
  <header id="header">
    <div class="logo">
      <router-link v-if="!auth" to="/">Vue Auth</router-link>
      <router-link v-if="auth" to="/dashboard">Dashboard</router-link>
    </div>
    <nav>
      <ul>
        <li>
          <router-link v-if="!auth" to="/signup">Sign Up</router-link>
        </li>
        <li>
          <router-link v-if="!auth" to="/signin">Sign In</router-link>
        </li>
        <li>
          <router-link v-if="auth" to="/profile">Profile</router-link>
        </li>
        <li>
          <button class="logout" @click="onLogout" v-if="auth" to="/logout">Logout</button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
  export default {
    computed: {
      auth () {
        return this.$store.getters.isAuthenticated
      }
    },
    methods: {
      onLogout() {
        this.$store.dispatch('logout')
      }
    }
  }
</script>

<style scoped>
  #header {
    height: 60px;
    width: 60vw;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    background-color: #3f3f3f;
    padding: 0 20px;
    margin: 0 auto 30px;
  }

  .logo {
    font-weight: bold;
    color: white;
  }

  .logo a {
    text-decoration: none;
    color: white;
  }

  nav {
    height: 100%;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    height: 100%;
    display: flex;
    flex-flow: row;
    align-items: center;
  }

  li {
    margin: 0 16px;
  }

  li a {
    text-decoration: none;
    color: white;
  }

  .logout {
    background: transparent;
    border: none;
    font: inherit;
    color: white;
    cursor: pointer;
  }
</style>
