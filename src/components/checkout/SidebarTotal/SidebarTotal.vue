<template>
  <div class="flex--column">
    <el-divider/>
    <div class="flex--row side__content--row">
      <span>BOOKING AMOUNT</span>
      <p>${{totalAmount}}</p>
    </div>
    <div class="flex--row side__content--row">
      <p>Payable now</p>
      <p>$0</p>
    </div>
    <div class="flex--row side__content--row">
      <p>Payable at check-in</p>
      <p>${{totalAmount}}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    totalAmount: {
      type: Number
    }
  }
}
</script>
<style src="./SidebarTotal.scss" lang="scss" scoped/>
