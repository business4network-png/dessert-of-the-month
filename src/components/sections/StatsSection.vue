<script setup>
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

defineProps({
  stats: {
    type: Array,
    default: () => [],
  },
})

const sectionRef = ref(null)
const isVisible = ref(false)

useIntersectionObserver(sectionRef, ([{ isIntersecting }]) => {
  if (isIntersecting) isVisible.value = true
})
</script>

<template>
  <section
    v-if="stats?.length"
    ref="sectionRef"
    class="py-12 md:py-16 bg-white"
  >
    <div class="container mx-auto px-4 md:px-8 lg:px-16">
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
        <div
          v-for="(stat, i) in stats"
          :key="i"
          class="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10"
          :class="{ 'animate-fade-up': isVisible }"
          :style="{ animationDelay: `${0.1 + i * 0.1}s` }"
        >
          <p class="font-benzin font-bold text-2xl md:text-3xl text-primary mb-1">
            {{ stat.value }}
          </p>
          <p class="text-text/80 text-sm md:text-base">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
