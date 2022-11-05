<template>
  <v-app>
    
    <Header/>
    <v-main>
      
      <Nuxt />
    </v-main>

    <Footer/>
  </v-app>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  name: 'DefaultLayout',
  components: {
    Header,
    Footer
  },
  data () {
    return {
    }
  },
  created () {
  },
}
</script>
