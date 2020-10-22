<template>
  <div id="app">
    <app-header />
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from './components/header/header.vue'

  export default {
    name: 'app',
    components: {
      'app-header': Header
    },
    created () {
      this.$store.dispatch('tryAutoLogin')
      console.log(process.env.VUE_APP_FIREBASE_API_KEY)
    }
  }
</script>

<style>
  @import url(https://fonts.googleapis.com/css?family=Roboto:300);
  html, body{
    margin:0px;
    padding:0px;
  }

  body {
    background: #52b5b8; /* fallback for old browsers */
    background: -webkit-linear-gradient(right, #52b5b8, #6fbfc2);
    background: -moz-linear-gradient(right, #52b5b8, #6fbfc2);
    background: -o-linear-gradient(right, #52b5b8, #6fbfc2);
    background: linear-gradient(to left, #52b5b8, #6fbfc2);
    font-family: "Roboto", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .form {
    position: relative;
    z-index: 1;
    background: #FFFFFF;
    max-width: 360px;
    margin: 0 auto 100px;
    padding: 20px 30px;
    text-align: center;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  }

  .form input {
    font-family: "Roboto", sans-serif;
    outline: 0;
    background: #f2f2f2;
    width: 100%;
    border: 0;
    margin: 0 0 9px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
  }

  .form button {
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    outline: 0;
    background: #e86a66;
    width: 100%;
    border: 0;
    padding: 15px;
    color: #FFFFFF;
    font-size: 14px;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer;
    margin-top: 10px;
  }

  .form button:hover,.form button:active,.form button:focus {
    background: #da706d;
  }

  .form .message {
    margin: 15px 0 0;
    color: #b3b3b3;
    font-size: 12px;
  }

  .form .message a {
    color: #52b5b8;
    text-decoration: none;
  }

  .form .register-form {
    display: none;
  }

  .invalid > input{
    border: 1px solid red;
  }
</style>
