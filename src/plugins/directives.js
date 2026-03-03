// Directive for preventing multiple button clicks at the same time
const preventMultipleClick = {
  mounted (el, binding) {
    el.addEventListener('click', () => {
      if (!el.disabled) {
        el.disabled = true
        setTimeout(() => {
          el.disabled = false
        }, binding.value || 4000)
      }
    })
  }
}

export default preventMultipleClick
