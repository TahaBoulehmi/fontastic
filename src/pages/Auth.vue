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
  <q-banner v-if="submittedForm" inline-actions class="text-white bg-red">
    Wrong information
    <template v-slot:action>
      <q-btn @click="submittedForm = false" flat color="white" label="Dismis" />
    </template>
  </q-banner>

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
      tab: 'Signin',
      submittedForm: false
    }
  },
  watch: {
    submittedForm: function (to, from) {
      to ? setTimeout(() => { this.submittedForm = false }, 3000) : null
    }
  },
  methods: {
    login () {
      this.$axios.put('http://development.tamismart.com:919/signin', { email: this.email, password: this.password }).then(response => {
        this.$q.sessionStorage.set("email", this.email)
        this.$q.sessionStorage.set("password", this.password)
        this.$router.push('/')
      }).catch(() => {
        this.submittedForm = true
      })
    },
    signup () {
      this.$axios.post('http://development.tamismart.com:919/signup', { email: this.email, fullName: this.fullName, password: this.password }).then(response => {
        this.$q.sessionStorage.set("email", this.email)
        this.$q.sessionStorage.set("password", this.password)
        this.$router.push('/')
      }).catch(() => {
        this.submittedForm = true
      })
    }
  }
}
</script>
