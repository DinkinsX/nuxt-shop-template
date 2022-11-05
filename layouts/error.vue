<template>
  <div class="bg-circles-wrap">
    <v-container class="content-padding">
      <v-row align="center">
        <v-col cols="12" md="6">
            <h1 class="" v-if="error.statusCode === 404">
              404
            </h1>
            <h1 class="" v-else>
              Произошла внутренняя ошибка
            </h1>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'EmptyLayout',
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? 'Страница не найдена ' : 'Произошла внутренняя ошибка'
    return {
      title
    }
  },
  created() {
  },
}
</script>

<style lang="scss" scoped>
</style>
