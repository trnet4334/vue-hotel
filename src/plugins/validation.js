import { defineRule } from 'vee-validate'
import { required, alpha, alpha_spaces, numeric, min_value } from '@vee-validate/rules'

// Standard rules from @vee-validate/rules
defineRule('required', required)
defineRule('alpha', alpha)
defineRule('alpha_spaces', alpha_spaces)
defineRule('numeric', numeric)
defineRule('min_value', min_value)

// Custom regex-based rules
defineRule('regexEmail', (value) => {
  if (!value) return 'This field is required'
  // eslint-disable-next-line no-control-regex
  const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
  return regex.test(value) || 'Please enter a valid e-mail address'
})

defineRule('regexPhoneNum', (value) => {
  if (!value) return 'This field is required'
  const regex = /(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-s.]?[(]?[0-9]{1,3}[)]?([-s.]?[0-9]{3})([-s.]?[0-9]{3,4})/
  return regex.test(value) || 'Please start from your country code including a plus sign, ex. +1 480-000-0001'
})

defineRule('regexAddress', (value) => {
  if (!value) return 'This field is required'
  const regex = /^\s*\S+(?:\s+\S+){2}/
  return regex.test(value) || 'Please enter a valid address'
})

defineRule('regexCity', (value) => {
  if (!value) return 'This field is required'
  const regex = /^[a-zA-Z\u0080-\u024F]+(?:. |-| |')*([1-9a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/
  return regex.test(value) || 'Please enter a valid city name'
})
