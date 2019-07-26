<template>
  <q-page class="row flex flex-center">
    <div class="row col-12">
      <div class="col-2"></div>
      <div class="row col-8">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <p style="color: red">Could you guess the name of this font?</p>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <strong>Lorum epsum lora epsu aloper epsis</strong>
        </div>
      </div>
      <div class="col-2"></div>
    </div>
    <div class="col-2"></div>
    <div class="row col-8">
      <q-item tag="label" v-ripple>
        <q-item-section side top>
          <q-checkbox v-model="check1" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Notifications</q-item-label>
          <q-item-label caption>
            Notify me about updates to apps or games that I downloaded
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple>
        <q-item-section side top>
          <q-checkbox v-model="check2" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Sound</q-item-label>
          <q-item-label caption>
            Auto-update apps at anytime. Data charges may apply
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple>
        <q-item-section side top>
          <q-checkbox v-model="check3" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Auto-add widgets</q-item-label>
          <q-item-label caption>
            Automatically add home screen widgets and you have to
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple>
        <q-item-section side top>
          <q-checkbox v-model="check3" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Auto-add widgets</q-item-label>
          <q-item-label caption>
            Automatically add home screen widgets because you are
          </q-item-label>
        </q-item-section>
      </q-item>
    </div>
    <div class="col-2"></div>
    <q-btn label="Submit" color="primary" class="col-4" @click="signup()" />
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      check1: true,
      check2: false,
      check3: false
    }
  }
}
</script>
