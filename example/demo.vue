<template lang="pug">
  #demo
    int-tel-input(
      :phone="user.phone",
      :country-abbr="user.countryAbbr",
      @country-change="countryCodeChange",
      @phone-change="phoneChange"
    )
    p
      span(v-text="`phone number: ${user.phone}`")
    p
      span(v-text="`country abbr: ${user.countryAbbr}`")
    p
      span(v-text="`country code: ${user.countryCode}`")
</template>

<script>
import IntTelInput from '../dist/int-tel-input.js'

export default {
  components: {IntTelInput},

  data () {
    return {
      user: {
        phone: '',
        countryAbbr: 'af',
        countryCode: ''
      }
    }
  },

  methods: {
    countryCodeChange (country) {
      this.user.countryAbbr = country.addr
      this.user.countryCode = country.code
    },
    phoneChange (phone) {
      this.user.phone = phone
    }
  }
}
</script>

<style lang="stylus" scoped>
  #demo
    width: 400px
    margin: auto
    font-family: "Avenir Next", Avenir, "Helvetica Neue", Helvetica, "Nimbus Sans L", Arial, "Liberation Sans", "PingFang SC", "Hiragino Sans GB", "Source Han Sans CN", "Source Han Sans SC", "Microsoft YaHei", "Wenquanyi Micro Hei", "WenQuanYi Zen Hei", "ST Heiti", SimHei, "WenQuanYi Zen Hei Sharp", sans-serif;
    p
      margin-top: 20px
</style>



