<template>
  <section class="activity flex--column">
    <checkout-navbar></checkout-navbar>
    <div class="activity-container flex--column">
      <h1 class="page__title">Latest Activity</h1>
      <div>
        <div class="flex--row activity-content">
          <div class="flex--row filter">
            <label for="types">Filters:</label>
            <div class="flex--row filter-select input__select">
              <select name="types" id="types" v-model="type">
                <option value="All">All Types</option>
                <option value="Upcoming">Upcoming/Completed</option>
                <option value="Canceled">Canceled</option>
                <option value="Other">Other Activities</option>
              </select>
              <select name="time range" id="range" v-model="dateRange">
                <option value="three">Three Months</option>
                <option value="six">Six Months</option>
                <option value="nine">Nine Months</option>
                <option value="twelve">Twelve Months</option>
              </select>
            </div>
          </div>
          <div class="flex--row buttons">
            <button @click="resetFilter">RESET</button>
            <button @click="filterSelectedResult">UPDATE</button>
          </div>
        </div>
        <el-divider/>
        <p class="content__description">We can only show up to <b>12 months</b> of past activity.</p>
      </div>
      <div class="activity-items-wrapper">
        <ul
          v-infinite-scroll="load"
          infinite-scroll-disabled="disabled"
        >
          <activity-item v-for="item in sortedResult" :bookingItem="item" :key="item.createTime"/>
        </ul>
      </div>
    </div>
    <checkout-footer></checkout-footer>
  </section>
</template>
<script>
import CheckoutNavbar from '@/components/header/navbar/CheckoutNavbar.vue'
import CheckoutFooter from '@/components/footer/CheckoutFooter.vue'
import ActivityItem from '@/components/booking/ActivityItem/ActivityItem'
import { mapGetters } from 'vuex'
export default {
  name: 'ReservationDetail',
  components: {
    CheckoutNavbar,
    CheckoutFooter,
    ActivityItem
  },
  data () {
    return {
      count: 3,
      loading: false,
      type: 'All',
      dateRange: 'six'
    }
  },
  computed: {
    ...mapGetters({
      sortedResult: 'sortedResult'
    }),
    noMore () {
      return this.count >= 20
    },
    disabled () {
      return this.loading || this.noMore
    }
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
    // Filter the the result from both selections
    filterSelectedResult () {
      const select = {
        status: this.type,
        range: this.dateRange
      }
      this.$store.dispatch('submitFilterChoice', select)
    },
    resetFilter () {
      this.$store.dispatch('resetFilterChoice')
      this.type = 'All'
      this.dateRange = 'six'
    }
  }
}
</script>
<style src="./ReservationDetail.scss" lang="scss" scoped></style>
