<template>
  <div class="flex--column">
    <div class="flex--row row">
      <span><u>Guest Name</u></span>
      <p>{{customer.contactDetail.firstName + ' ' + customer.contactDetail.lastName}}</p>
    </div>
    <div class="flex--row row">
      <span><u>Email Address</u></span>
      <p>{{customer.contactDetail.email}}</p>
    </div>
    <div class="flex--row row">
      <span><u>Phone Number</u></span>
      <p>{{customer.contactDetail.phoneNum}}</p>
    </div>
    <div class="flex--row row">
      <span><u>Address</u></span>
      <p>{{address}}</p>
    </div>
    <div class="flex--row row">
      <span><u>Payment Method</u></span>
      <p>Pay at Check-in</p>
    </div>
    <div class="flex--row row">
      <span><u>Special Request</u></span>
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
      customer: this.info
    }
  },
  computed: {
    address () {
      return this.customer.addressDetail.address + ', ' +
        this.customer.addressDetail.city + ', ' +
        this.customer.addressDetail.country + ' ' +
        this.customer.addressDetail.zipCode
    }
  }
}
</script>
<style src="./ConfirmationCard.scss" lang="scss" scoped/>
