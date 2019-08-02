<template>
  <q-page>
    <q-tabs
      v-model="tab"
      dense
      no-caps
      inline-label
      class="bg-grey-2 text-teal"
    >
      <q-tab name="Signin" icon="security" label="Signin" @click="loginPage = true" />
      <q-tab name="Signup" icon="computer" label="Signup" @click="loginPage = false" />
    </q-tabs>

    <q-page v-show="loginPage" class="row flex flex-center">
      <q-field
      icon="email"
      icon-color="amber"
      label="Email"
      helper="Please enter your email"
      inset="icon"
      class="col-10"
      >
      <q-input v-model="email" type="email" />
    </q-field>
    <q-field
    icon="lock"
    :count="16"
    helper="Please enter your password"
    label="Password"
    inset="icon"
    class="col-10"
    >
    <q-input v-model="password" type="password" float-label="password" />
  </q-field>
  <q-btn label="Login" color="primary" class="col-4" @click="login()" />
</q-page>
<q-page v-show="!loginPage" class="row flex flex-center">
  <q-field
  icon="face"
  label="Full Name"
  helper="Please enter your email"
  inset="icon"
  class="col-10"
  >
  <q-input v-model="fullName" type="text"/>
</q-field>
<q-field
icon="email"
icon-color="amber"
label="Email"
helper="Please enter your email"
inset="icon"
class="col-10"
>
<q-input v-model="email" type="email" />
</q-field>
<q-field
icon="lock"
:count="16"
helper="Please enter your password"
label="Password"
inset="icon"
class="col-10"
>
<q-input v-model="password" type="password" float-label="password" />
</q-field>
<q-btn label="Signup" color="secondary" class="col-4" @click="signup()" />

</q-page>

</q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageAuth',
  data () {
    return {
      fullName: '',
      email: '',
      password: '',
      loginPage: true,
      tab: 'Signin'
    }
  },
  methods: {
    login () {
      this.$axios.put('/signin', { email: this.email, password: this.password }).then(response => {
        // get body data
        this.someData = response.body
      }, response => {
        // error callback
      })
    },
    signup () {
      this.$axios.put('/signup', { email: this.email, fullName: this.fullName, password: this.password }).then(response => {
        // get body data
        this.someData = response.body
      }, response => {
        // error callback
      })
    }
  }
}
</script>
