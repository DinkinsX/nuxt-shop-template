<template>
  <div>
      <v-container class="content-padding">
        <v-row align="center" class="block-padding">
          <v-col cols="12" lg="6">
            Образец сайта для интернет магазина
          </v-col>
        </v-row>
      </v-container>
  </div>
</template>

<script>

export default {
  components: {
  },
  head () {
    return {
      title: '',
      meta: [
        { charset: 'utf-8' },
        { hid: 'description', name: 'description', content: ''},
        { hid: 'keywords', name: 'keywords', content: 'Главная'}
      ]
    }
  },
  data() {
    return {
      catalogSpec: [],
    }
  },
  mounted() {
  },
  created() {
  },
  watch: {
  },
  methods: {
  },
  computed: {
  }
}
</script>

<style lang="scss" scoped>
</style>