<template>
  <div class="room">
    <div class="flex--row">
      <div class="flex--column col-1">
        <img :src="require(`@/assets/images/room/${room.imageUrl}.jpg`)" :alt="`${room.imageAlt}`">
      </div>
      <div class="flex--column col-2">
        <div class="flex--column room--introduction">
          <h4 class="util__header--title">{{room.type}}</h4>
          <h5>{{room.properties}}</h5>
          <p>{{room.description}}</p>
<!--          TODO: Change link to popout modal-->
          <span><router-link to="/rooms/classic-guestroom" target="_blank" rel="noreferrer noopener">Room details</router-link></span>
        </div>
        <el-divider/>
        <div class="flex--row room--best-rate">
          <div>
            <span>Best Available Rate</span>
            <p>Best rate guaranteed with fully flexible cancellation policy</p>
          </div>
          <div>
            <span>${{rate.bestRate}}</span>
            <p>Per Night</p>
            <p>Excluding Taxes & Fees</p>
            <button>BOOK NOW</button>
          </div>
        </div>
        <el-divider/>
        <div class="flex--row room--breakfast-package">
          <div>
            <span>Spa & Breakfast Package</span>
            <p>Enjoy our well-known spa service and continental breakfast daily
              in our restaurant.</p>
          </div>
          <div>
            <span>${{rate.spaPackageRate}}</span>
            <p>Per Night</p>
            <p>Excluding Taxes & Fees</p>
            <button>BOOK NOW</button>
          </div>
        </div>
        <el-divider/>
        <div class="flex--row room--breakfast-package">
          <div>
            <span>Nature Adventure Package</span>
            <p>Discover the wonderful nature with our experienced local guide and
            enjoy the amazing view.</p>
          </div>
          <div>
            <span>${{rate.adventurePackageRate}}</span>
            <p>Per Night</p>
            <p>Excluding Taxes & Fees</p>
            <button>BOOK NOW</button>
          </div>
        </div>
        <el-divider/>
        <div class="flex--row room--breakfast-package">
          <div>
            <span>Summertime Escape Package</span>
            <p>Enjoy spectacular view from private deck of the selected room from us.</p>
          </div>
          <div>
            <span>${{rate.summertimePackageRate}}</span>
            <p>Per Night</p>
            <p>Excluding Taxes & Fees</p>
            <button>BOOK NOW</button>
          </div>
        </div>
        <el-divider/>
        <div class="flex--row room--breakfast-package">
          <div>
            <span>The Anniversary/The Honeymoon Package</span>
            <p>Spend your honeymoon or anniversary with luxurious accommodations from us.</p>
          </div>
          <div>
            <span>${{rate.honeymoonPackageRate}}</span>
            <p>Per Night</p>
            <p>Excluding Taxes & Fees</p>
            <button>BOOK NOW</button>
          </div>
        </div>
        <el-divider/>
        <div class="flex--row room--breakfast-package">
          <div>
            <span>Retrograde Retreat Package</span>
            <p>Prioritize wellness and embrace retrograde
              with a 2-night stay, including two free yoga or fitness classes.</p>
          </div>
          <div>
            <span>${{rate.retrogradePackageRate}}</span>
            <p>Per Night</p>
            <p>Excluding Taxes & Fees</p>
            <button>BOOK NOW</button>
          </div>
        </div>
        <el-divider/>
        <div class="flex--row room--breakfast-package">
          <div>
            <span>Linger Longer Package</span>
            <p>Enjoy a fifth night with our compliments on
              stays. Stay with us as long as you wish, the longer you stay,
              the more you save!</p>
          </div>
          <div>
            <span>${{rate.longerPackageRate}}</span>
            <p>Per Night</p>
            <p>Excluding Taxes & Fees</p>
            <button>BOOK NOW</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    room: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      rate: this.room.rate
    }
  }
}
</script>
<style src="./Room.scss" lang="scss" scoped/>
