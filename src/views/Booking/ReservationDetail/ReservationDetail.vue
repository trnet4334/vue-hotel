<template>
  <section class="activity flex--column">
    <checkout-navbar></checkout-navbar>
    <div class="activity-container page-content--header flex--column">
      <h1>Latest Activity</h1>
      <div>
        <div class="flex--row activity-content">
          <div class="flex--row" style="align-items: center">
            <label for="types">Filters:</label>
            <select name="types" id="types" v-model="type">
              <option value="all">All Types</option>
              <option value="upcoming">Upcoming Stays</option>
              <option value="canceled">Canceled Stays</option>
              <option value="previous">Previous Stays</option>
              <option value="other">Other Activity</option>
            </select>
            <select name="time range" id="range" v-model="dateRange">
              <option value="three">Three Months</option>
              <option value="six">Six Months</option>
              <option value="twelve">Twelve Months</option>
            </select>
          </div>
          <div class="flex--row buttons">
            <button>RESET</button>
            <button>UPDATE</button>
          </div>
        </div>
        <el-divider/>
        <p>We can only show up to <b>12 months</b> of past activity.</p>
      </div>
      <div class="activity-items-wrapper">
        <ul
          v-infinite-scroll="load"
          infinite-scroll-disabled="disabled"
        >
          <activity-item/>
        </ul>
        <span v-if="loading">Loading...</span>
      </div>
    </div>
    <checkout-footer></checkout-footer>
  </section>
</template>
<script>
import CheckoutNavbar from '@/components/header/navbar/CheckoutNavbar.vue'
import CheckoutFooter from '@/components/footer/CheckoutFooter.vue'
import ActivityItem from '@/components/booking/ActivityItem/ActivityItem'
export default {
  name: 'ReservationDetail',
  components: {
    CheckoutNavbar,
    CheckoutFooter,
    ActivityItem
  },
  data () {
    return {
      count: 4,
      loading: false,
      type: 'all',
      dateRange: 'three',
      result: []
    }
  },
  computed: {
    noMore () {
      return this.count >= 20
    },
    disabled () {
      return this.loading || this.noMore
    }
    // ,
    // Sort the date of filter result from latest to last
    // sortResultDate () {}
  },
  methods: {
    // Lazy loading infinite scroll
    load () {
      this.loading = true
      setTimeout(() => {
        this.count += 3
        this.loading = false
      }, 3000)
    },
    // Filter the result from type and date range
    filterResult () {},
    // Reset filter setting
    resetFilter () {},
    // Update filter setting
    updateFilter () {}
  }
}
</script>
<style src="./ReservationDetail.scss" lang="scss" scoped></style>
