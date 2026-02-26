<script setup>
defineProps({
  name: { type: String, default: 'check' },
  size: { type: String, default: 'md' },
})

const sizeMap = { sm: 'w-4 h-4', md: 'w-5 h-5', lg: 'w-6 h-6' }

const icons = {
  check: 'M5 13l4 4L19 7',
  star: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
}
</script>

<template>
  <svg
    class="flex-shrink-0"
    :class="sizeMap[size]"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    stroke-width="2.5"
  >
    <path stroke-linecap="round" stroke-linejoin="round" :d="icons[name] || icons.check" />
  </svg>
</template>
