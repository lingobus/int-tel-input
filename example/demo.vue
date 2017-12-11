<template lang="pug">
  .demo
    int-tel-input(
      :phoneNumber="user.phone",
      :countryCode="user.countryCode",
      @countryCodeChange="countryCodeChange",
      @phoneNumberChange="phoneNumberChange"
    )
    p
      span(v-text="`phone number: ${user.phone}`")
    p
      span(v-text="`country code: ${user.countryCode}`")
</template>

<script>
import {IntTelInput} from '../src/index.js'

export default {
  components: {IntTelInput},

  data () {
    return {
      user: {
        phone: '',
        countryCode: 86
      }
    }
  },

  methods: {
    countryCodeChange (countryCode) {
      this.user.countryCode = countryCode
      console.log(countryCode)
    },
    phoneNumberChange (phoneNumber) {
      this.user.phone = phoneNumber
      console.log(phoneNumber)
    }
  }
}
</script>

