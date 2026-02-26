<script setup>
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import ProgramSection from './ProgramSection.vue'

defineProps({
  sections: {
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
    id="program"
    ref="sectionRef"
    class="py-16 md:py-24"
    style="background: linear-gradient(90deg, #FEF5FD 0%, #FFF1EE 49%, #FFF1FC 100%)"
  >
    <div class="container mx-auto px-4 md:px-8 lg:px-16">
      <h2
        class="font-benzin text-2xl md:text-4xl lg:text-5xl text-primary uppercase text-center mb-12 md:mb-16"
        :class="{ 'animate-fade-up': isVisible }"
      >
        Программа курса
      </h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <div
          v-for="(section, i) in sections"
          :key="section.id || i"
          :class="{ 'animate-fade-up': isVisible }"
          :style="{ animationDelay: `${0.1 + i * 0.08}s` }"
        >
          <ProgramSection :section="section" />
        </div>
      </div>
    </div>
  </section>
</template>
