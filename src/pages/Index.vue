<template>
  <q-page class="row flex flex-center">
    <q-banner v-if="submittedForm" inline-actions class="text-white" :class="(selectedFont !== rightFont) ? 'bg-red' : 'bg-green'">
      The right answer was: {{fonts[rightFont]}}
      <template v-slot:action>
        <q-btn @click="nextQuestion()" flat color="white" label="Dismis" />
      </template>
    </q-banner>
    <div class="row col-12">
      <div class="col-2"></div>
      <div class="row col-8">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <p style="color: red">Could you guess the name of this font?</p>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <p :style="{'font-family': fonts[rightFont]}">Lorum epsum lora epsu aloper epsis</p>
        </div>
      </div>
      <div class="col-2"></div>
    </div>
    <div class="col-2"></div>
    <div class="row col-8">

      <q-item v-for="(font, index) in fonts" v-bind:key="index" tag="label" v-ripple>
        <q-item-section side top>
          <q-radio :disabled="submittedForm" v-model="selectedFont" :val="index" />
        </q-item-section>

        <q-item-section>
          <q-item-label>{{font}}</q-item-label>
          <q-item-label :style="{'font-family': (submittedForm ? font : null)}" caption>
            This text will use the parent font. You should submit the form first.
          </q-item-label>
        </q-item-section>
      </q-item>
    </div>
    <div class="col-2"></div>
    <q-btn v-if="!submittedForm" label="Submit" color="primary" class="col-4" :disabled="selectedFont !== 0 && !selectedFont" @click="submit()" />
    <q-btn v-else label="Next" color="secondary" class="col-4" @click="nextQuestion()" />
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      fonts: [],
      selectedFont: undefined,
      rightFont: 3,
      submittedForm: false
    }
  },
  methods: {
    submit () {
      this.submittedForm = true
      this.$axios.post('https://api.fontastic.btaha.com/submit', {email: this.$q.sessionStorage.getItem("email"), password: this.$q.sessionStorage.getItem("password"), rightAnswer: (this.selectedFont === this.rightFont)})
    },
    nextQuestion () {
      this.selectedFont = undefined
      this.submittedForm = false
      this.$axios.get('https://api.fontastic.btaha.com/question')
        .then(response => {
          this.fonts = response.data
          this.rightFont = Math.floor(Math.random() * (this.fonts.length - 0 + 1)) + 0
        })
    }
  },
  created () {
    this.nextQuestion()
  }
}
</script>
