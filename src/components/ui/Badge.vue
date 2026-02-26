<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (v) => ['primary', 'accent', 'outline'].includes(v),
  },
})

const variants = {
  primary: 'bg-primary text-white',
  accent: 'bg-accent/20 text-accent',
  outline: 'border-2 border-primary text-primary bg-transparent',
}
</script>

<template>
  <span
    class="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold"
    :class="variants[variant]"
  >
    <slot />
  </span>
</template>
