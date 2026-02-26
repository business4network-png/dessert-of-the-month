<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (v) => ['primary', 'secondary', 'outline'].includes(v),
  },
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg'].includes(v),
  },
  href: { type: String, default: '' },
  tag: {
    type: String,
    default: 'button',
    validator: (v) => ['button', 'a'].includes(v),
  },
})

const base =
  'inline-flex items-center justify-center font-medium rounded-2xl transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
const variants = {
  primary:
    'bg-primary text-white shadow-cta hover:bg-primary-dark hover:scale-105 hover:shadow-xl',
  secondary: 'bg-white text-primary border-2 border-primary hover:bg-primary/5',
  outline: 'bg-transparent border-2 border-white text-white hover:bg-white/10',
}
const sizes = {
  sm: 'px-4 py-2 text-base min-w-[120px]',
  md: 'px-6 py-4 text-lg min-w-[160px] md:min-w-[200px]',
  lg: 'px-8 py-5 text-xl min-w-[200px] md:min-w-[260px]',
}
</script>

<template>
  <component
    :is="href ? 'a' : tag"
    :href="href || undefined"
    :class="[base, variants[variant], sizes[size]]"
    @click="$emit('click')"
  >
    <slot />
  </component>
</template>
