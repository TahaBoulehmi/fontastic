<template>
  <q-page class="row flex flex-center">
    <div class="row col-12">
      <div class="col-2"></div>
      <div class="row col-8">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <p style="color: red">Could you guess the name of this font?</p>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <strong style="font-family: 'Montserrat'">Lorum epsum lora epsu aloper epsis</strong>
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
          <q-item-label>{{font.name}}</q-item-label>
          <q-item-label :style="{'font-family': (submittedForm ? font.name : null)}" caption>
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
      fonts: [
        {
          name: 'Roboto',
          url: 'xxx'
        },
        {
          name: 'Lato',
          url: 'xxx'
        },
        {
          name: 'Farro',
          url: 'xxx'
        },
        {
          name: 'Fira Code',
          url: 'xxx'
        }
      ],
      selectedFont: undefined,
      rightFont: 2,
      submittedForm: false
    }
  },
  methods: {
    submit () {
      this.submittedForm = true;
      (this.selectedFont && this.rightFont && this.selectedFont === this.rightFont) ? alert(true) : alert(false)
    },
    nextQuestion () {
      this.selectedFont = undefined
      this.submittedForm = false
    }
  }
}
</script>
