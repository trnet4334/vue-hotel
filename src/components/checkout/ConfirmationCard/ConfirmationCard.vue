<template>
  <div class="flex--column">
    <div class="flex--row row">
      <span>Guest Name</span>
      <p>{{customer.contactDetail.firstName + ' ' + customer.contactDetail.lastName}}</p>
    </div>
    <div class="flex--row row">
      <span>Email Address</span>
      <p>{{customer.contactDetail.email}}</p>
    </div>
    <div class="flex--row row">
      <span>Phone Number</span>
      <p>{{customer.contactDetail.phoneNum}}</p>
    </div>
    <div class="flex--row row">
      <span>Address</span>
      <p>{{customer.addressDetail.address}}</p>
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
      customer: this.info
    }
  }
}
</script>
<style src="./ConfirmationCard.scss" lang="scss" scoped/>
