<template>
  <div>
    <el-divider/>
    <div class="flex--row package-rate">
      <div>
        <span><u>{{packageRate.name}}</u></span>
        <p>{{packageRate.description}}</p>
      </div>
      <div>
        <span>${{packageRate.rate}}</span>
        <p>Per Night</p>
        <p>Excluding Taxes & Fees</p>
        <button @click="selectRoom">BOOK NOW</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    packageRate: {
      type: Object,
      required: true
    }
  },
  data () {
    return {}
  },
  methods: {
    selectRoom () {
      const selection = {
        type: this.packageRate.type,
        packageName: this.packageRate.name,
        rate: this.packageRate.rate
      }
      this.$store.dispatch('addRoomToSelection', selection)
      this.$router.push('/reservation/s2')
    }
  }
}
</script>
<style src="./RoomPackage.scss" lang="scss" scoped></style>
