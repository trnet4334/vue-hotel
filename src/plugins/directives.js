import Vue from 'vue'

// Directive for preventing multiple button click at the same time
const preventMultipleClick = Vue.directive('preventMultipleClick', {
  inserted: (el, binding) => {
    el.addEventListener('click', event => {
      if (!el.disabled) {
        el.disabled = true
        setTimeout(() => {
          el.disabled = false
        }, binding.value || 4000)
      }
    })
  }
})

export default { preventMultipleClick }
