<template>
  <div class="users">
    <div v-show="!openForm">
      <button v-on:click="register">Register</button>
      <button v-on:click="login">Log In</button>
    </div>

    <form action="post" v-show="isRegistering">
      <label for>Username:</label>
      <br>
      <input type="text" name id>
      <br>

      <label for>Password:</label>
      <br>
      <input type="text" name id>
      <br>

      <label for>Confirm password:</label>
      <br>
      <input type="text" name id>
      <br>

      <button v-on:click="register">Sign up</button>
    </form>

    <form action="post" v-show="isLoggingIn">
      <label for>Username:</label>
      <input type="text" name id>
      <br>

      <label for>Password:</label>
      <input type="text" name id>
      <br>
      <button v-on:click="login">Log In</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titleText: "",
      projectText: "",
      openForm: false,
      isLoggingIn: false,
      isRegistering: false
    };
  },

  methods: {
    register() {
      console.log("register");
      this.openForm = true;

      this.isRegistering = true;
    },
    login() {
      console.log("login");
      this.openForm = true;

      this.isLoggingIn = true;
    }
  }
};
</script>

<style scoped>
.users {
  float: right;
}

.users button {
  padding: 10px 20px;
  border-radius: 5%;
  font-size: 1.25em;
  margin: 0px 2px;
}

.users button:focus {
  outline: none;
}
</style>

