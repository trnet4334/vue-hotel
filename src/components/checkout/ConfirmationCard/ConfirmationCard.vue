<template>
  <div class="flex--column">
    <div class="flex--row row">
      <span>Guest Name</span>
      <p>{{customer.fullName}}</p>
    </div>
    <div class="flex--row row">
      <span>Email Address</span>
      <p>{{customer.email}}</p>
    </div>
    <div class="flex--row row">
      <span>Phone Number</span>
      <p>{{customer.phoneNum}}</p>
    </div>
    <div class="flex--row row">
      <span>Address</span>
      <p>{{customer.address}}</p>
    </div>
    <div class="flex--row row">
      <span>Payment Method</span>
      <p>Pay at Check-in</p>
    </div>
    <div class="flex--row row">
      <span>Special Request</span>
      <p>{{customer.note}}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    info: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      customer: {
        fullName: this.$_.isEmpty(this.info) ? '' : this.info.contactDetail.firstName + ' ' + this.info.contactDetail.lastName,
        email: this.$_.isEmpty(this.info) ? '' : this.info.contactDetail.email,
        phoneNum: this.$_.isEmpty(this.info) ? '' : this.info.contactDetail.phoneNum,
        address: this.$_.isEmpty(this.info) ? '' : this.info.addressDetail.address + ', ' +
          this.info.addressDetail.city + ', ' +
          this.info.addressDetail.country + ' ' +
          this.info.addressDetail.zipCode,
        note: this.$_.isEmpty(this.info) ? '' : this.info.note
      }
    }
  }
}
</script>
<style src="./ConfirmationCard.scss" lang="scss" scoped/>
