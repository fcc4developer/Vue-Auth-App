<template>
  <div id="welcome">
    <h1>Welcome Page!</h1>
    <div class="cta">
      <router-link to="/signup">Sign Up</router-link>
      <router-link to="/signin">Sign In</router-link>
    </div>
  </div>
</template>

<style scoped>
  #welcome {
    width: 80%;
    margin: auto;
  }

  h1 {
    text-align: center;
  }

  p {
    text-align: center;
  }

  .cta {
    width: 300px;
    margin: auto;
    display: flex;
    flex-flow: row;
  }

  .cta a {
    margin: 0 auto 10px;
    text-decoration: none;
    display: inline-block;
    border: 1px solid #521751;
    border-radius: 3px;
    width: 100px;
    padding: 10px;
    color: #521751;
  }

  .cta a:hover,
  .cta a:active {
    background-color: #3f3f3f;
    color: white;
  }
</style>
