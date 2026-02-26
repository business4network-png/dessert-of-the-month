<script setup>
defineProps({
  padding: { type: String, default: 'md' },
  hover: { type: Boolean, default: true },
})

const paddingClasses = {
  none: '',
  sm: 'p-4',
  md: 'p-6 md:p-8',
  lg: 'p-8 md:p-10',
}
</script>

<template>
  <article
    class="bg-white rounded-2xl md:rounded-3xl shadow-lg border border-gray-100 overflow-hidden"
    :class="[
      paddingClasses[padding],
      hover && 'hover:shadow-xl hover:border-primary/20 transition-all duration-300',
    ]"
  >
    <slot />
  </article>
</template>
