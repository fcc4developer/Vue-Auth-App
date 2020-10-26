<template>
  <div class="header">
    <router-link v-if="!auth" to="/" class="logo">Vue Auth</router-link>
    <router-link v-if="auth" to="/dashboard" class="logo">Dashboard</router-link>
    <div class="header-right">
      <router-link v-if="!auth" to="/signup" class="link">Sign Up</router-link>
      <router-link v-if="!auth" to="/signin" class="link">Sign In</router-link>
      <router-link v-if="auth" to="/profile" class="link">Profile</router-link>
      <button class="link logout" @click="onLogout" v-if="auth" to="/logout">Logout</button>
    </div>
  </div>
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
  .header {
    overflow: hidden;
    background-color: #3f3f3f;
    margin: 0 auto 30px;
    padding: 10px 10px;
  }

  .logo {
    font-size: 25px;
    font-weight: bold;
    margin: 0 15px;
    text-decoration: none;
    color: white;
  }

  .link {
    float: left;
    color: black;
    text-align: center;
    padding: 12px;
    margin: 0 5px;
    text-decoration: none;
    color: white;
    line-height: 25px;
    border-radius: 4px;
  }

  .link:hover {
    background-color: #ddd;
    color: black;
  }

  .link.active {
    background-color: dodgerblue;
    color: white;
  }

  .header-right {
    float: right;
  }

  .logout {
    background: transparent;
    border: none;
    font: inherit;
    color: white;
    cursor: pointer;
    padding: 15px;
  }

  @media screen and (max-width: 500px) {
    .link,
    .logo {
      float: none;
      display: block;
      text-align: left;
    }
    .header-right {
      float: none;
    }

    .logout {
      padding: 10px;
    }
}
</style>
