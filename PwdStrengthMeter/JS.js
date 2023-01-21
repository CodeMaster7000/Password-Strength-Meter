const { ref, computed } = VueCompositionAPI
Vue.use(VueCompositionAPI.default)
const usePasswordStrengthChecker = function() {
  const password = ref("");
  const scoreMap = {
      0: { color: "#F06292", percent: 0 },
      1: { color: "#F48FB1", percent: 20 },
      2: { color: "#80DEEA", percent: 40 },
      3: { color: "#80CBC4", percent: 80 },
      4: { color: "#A5D6A7", percent: 100 },
  }
  let result = computed(() => zxcvbn(password.value)); 
  let scoreColor = computed(() => scoreMap[result.value.score].color)
  let percent = computed(() => scoreMap[result.value.score].percent)
  return {
      password,
      result,
      scoreColor,
      percent
  }
}
var app = new Vue({
  el: '#app',
  setup() {
    const { password, result, scoreColor, percent } = usePasswordStrengthChecker()  
    return {
      password,
      result,
      scoreColor,
      percent
    }
  }
})
