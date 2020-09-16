<template>
  <li>
    <div class="flex--row activity-item">
      <div class="flex--column date">
        <div class="flex--row date-items">
          <div class="flex--row date-item-1">
            <span class="date-1">10</span>
            <div class="flex--column">
              <span class="date-2">JUN</span>
              <span class="date-3">2020</span>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24" xml:space="preserve">
            <path d="M23.854,11.647l-9.5-9.5c-1.022-1.022-2.685-1.022-3.707,0c-1.022,1.022-1.022,2.685,0,3.707L14.293,9.5H2.5C1.122,9.5,0,10.622,0,12s1.122,2.5,2.5,2.5h11.793l-3.646,3.646c-1.022,1.022-1.022,2.685,0,3.707c0.511,0.511,1.182,0.767,1.854,0.767s1.342-0.255,1.854-0.767l9.5-9.5C24.049,12.158,24.049,11.842,23.854,11.647z"/>
          </svg>
          <div class="flex--row date-item-2">
            <span class="date-1">13</span>
            <div class="flex--column">
              <span class="date-2">JUN</span>
              <span class="date-3">2020</span>
            </div>
          </div>
          <el-divider direction="vertical"/>
        </div>
      </div>
      <div class="flex--row detail">
        <div class="type flex--row">
          <span>Stay</span>
          <ul>
            <li>Room 1: Classic Guestroom</li>
            <li>Room 2: Deluxe Guestroom</li>
          </ul>
        </div>
        <div class="status">
          <span>Upcoming</span>
        </div>
        <div class="flex--column option">
          <div class="flex--row option-item">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                 viewBox="0 0 24 24" xml:space="preserve">
              <path d="M19,8.5C19,8.776,19.224,9,19.5,9h4C23.776,9,24,8.776,24,8.5V4.542c0-0.276-0.224-0.5-0.5-0.5S23,4.265,23,4.542v2.952C20.336,2.59,16.549,0,12,0C5.383,0,0,5.383,0,12s5.383,12,12,12s12-5.383,12-12c0-0.276-0.224-0.5-0.5-0.5S23,11.724,23,12c0,6.065-4.935,11-11,11S1,18.065,1,12S5.935,1,12,1c5.166,0,8.33,3.658,10.141,7H19.5C19.224,8,19,8.224,19,8.5z"/>
            </svg>
            <span>BOOK AGAIN</span>
          </div>
          <div class="flex--row option-item">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                 viewBox="0 0 24 24" xml:space="preserve">
              <path d="M11.5,0C5.159,0,0,5.159,0,11.5S5.159,23,11.5,23S23,17.841,23,11.5S17.841,0,11.5,0z M17.5,12h-12C5.224,12,5,11.776,5,11.5S5.224,11,5.5,11h12c0.276,0,0.5,0.224,0.5,0.5S17.776,12,17.5,12z"/>
            </svg>
            <span>CANCEL BOOKING</span>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>
<script>
export default {
  name: 'ActivityItem',
  props: {}
}
</script>
<style src="./ActivityItem.scss" lang="scss" scoped/>
