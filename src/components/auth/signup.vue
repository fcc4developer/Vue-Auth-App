<template>
  <div id="signup">
    <div id="signin">
      <div class="form">
        <form class="login-form" @submit.prevent="onSubmit">
          <div class="input" :class="{invalid: $v.email.$error}">
            <h6 v-if="!$v.email.email">Please provide a valid email address.</h6>
            <input
                    type="email"
                    placeholder="Email"
                    id="email"
                    @blur="$v.email.$touch()"
                    v-model="email">
          </div>
          <div class="input" :class="{invalid: $v.age.$error}">
            <h6 v-if="!$v.age.minVal">You have to be at least {{ $v.age.$params.minVal.min }} years old.</h6>
            <input
                    type="number"
                    placeholder="Age"
                    id="age"
                    @blur="$v.age.$touch()"
                    v-model.lazy.number="age">
          </div>
          <div class="input" :class="{invalid: $v.password.$error}">
            <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    @blur="$v.password.$touch()"
                    v-model="password">
          </div>
          <div class="input" :class="{invalid: $v.confirmPassword.$error}">
            <input
                    type="password"
                    placeholder="Confirm Password"
                    id="confirm-password"
                    @blur="$v.confirmPassword.$touch()"
                    v-model="confirmPassword">
          </div>
          <div class="input">
            <select id="country" v-model="country">
              <option value="usa">USA</option>
              <option value="india">India</option>
              <option value="uk">UK</option>
              <option value="germany">Germany</option>
            </select>
          </div>
          <div class="hobbies">
            <button @click="onAddHobby" type="button">Add Hobby</button>
            <div class="hobby-list">
              <div
                      class="input input-hobby"
                      v-for="(hobbyInput, index) in hobbyInputs"
                      :key="hobbyInput.id">
                <label :for="hobbyInput.id">Hobby #{{ index }}</label>
                <input
                        type="text"
                        :id="hobbyInput.id"
                        v-model="hobbyInput.value">
                <button @click="onDeleteHobby(hobbyInput.id)" type="button" class="delete-hobby">X</button>
              </div>
            </div>
          </div>
          <div class="input inline">
            <input type="checkbox" id="terms" v-model="terms">
            <label for="terms">Accept Terms of Use</label>
          </div>
          <button type="submit" :disabled="$v.$invalid">Create</button>
          <p class="message">Already registered? <router-link to="/signin">Sign In</router-link></p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import { required, email, numeric, minValue, minLength, sameAs } from 'vuelidate/lib/validators'

  export default {
    data () {
      return {
        email: '',
        age: null,
        password: '',
        confirmPassword: '',
        country: 'usa',
        hobbyInputs: [],
        terms: false
      }
    },
    methods: {
      onAddHobby () {
        const newHobby = {
          id: Math.random() * Math.random() * 1000,
          value: ''
        }
        this.hobbyInputs.push(newHobby)
      },
      onDeleteHobby (id) {
        this.hobbyInputs = this.hobbyInputs.filter(hobby => hobby.id !== id)
      },
      onSubmit () {
        const formData = {
          email: this.email,
          age: this.age,
          password: this.password,
          confirmPassword: this.confirmPassword,
          country: this.country,
          hobbies: this.hobbyInputs.map(hobby => hobby.value),
          terms: this.terms
        }
        this.$store.dispatch('signup', formData);
      }
    },
    validations: {
      email: {
        required,
        email
      },
      age: {
        required,
        numeric,
        minVal: minValue(18)
      },
      password: {
        required,
        minLen: minLength(6)
      },
      confirmPassword: {
        // sameAs: sameAs('password')
        sameAs: sameAs(vm => {
          return vm.password
        })
      }
    }
  }
</script>

<style scoped>
  .input select {
    border: 1px solid #ccc;
    border-radius: 2px;
    font: inherit;
    padding: 8px;
    margin-bottom: 10px;
  }

  .hobbies button {
    border: 1px solid #3f3f3f;
    background: #3f3f3f;
    color: white;
    padding: 8x;
    font: inherit;
    cursor: pointer;
    margin-top: 10px;
    margin-bottom: 15px;
  }

  .hobbies button:hover,
  .hobbies button:active {
    background-color: #575757;
  }

  .hobbies input {
    width: 90%;
  }

  div.input-hobby {
    padding: 5px;
  }

  div.input-hobby input{
    margin-top: 5px;
    padding: 10px;
    border-radius: 2px;
  }

  .delete-hobby {
    width: 20%;
    border-radius: 2px;
    padding: 4px;
  }
</style>
