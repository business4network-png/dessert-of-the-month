import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCtaStore = defineStore('cta', () => {
  const clickCount = ref(0)

  function trackClick() {
    clickCount.value++
    // Можно отправить в аналитику
    console.log('CTA click:', clickCount.value)
  }

  return { clickCount, trackClick }
})
