<template>
  <q-page class="row flex flex-center">
    <div class="row ">
      <template>
        <div class="q-pa-md">
          <q-markup-table dark class="bg-indigo-8">
            <thead>
              <tr>
                <th class="text-left">Rank</th>
                <th class="text-right">Full Name</th>
                <th class="text-right">Right Answers</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(user, n) in ranking">
                <td class="text-right">{{ n + 1}}</td>
                <td class="text-left">{{user.fullName}}</td>
                <td class="text-right">{{user.rightAnswers + '/' + (user.rightAnswers + user.wrongAnswers)}}</td>
              </tr>
            </tbody>
          </q-markup-table>
        </div>
      </template>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageRanking',
  data () {
    return {
      ranking: []
    }
  },
  created () {
    this.$axios.get('https://api.fontastic.btaha.com/ranking')
    .then(response => {
      this.ranking = response.data.users
    })
  }
}
</script>
