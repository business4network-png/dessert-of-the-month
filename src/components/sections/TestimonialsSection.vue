<script setup>
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import Card from '../ui/Card.vue'

defineProps({
  testimonials: {
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
    v-if="testimonials?.length"
    ref="sectionRef"
    id="testimonials"
    class="py-16 md:py-24"
    style="background: linear-gradient(180deg, #FFF1FC 0%, #FEF5FD 100%)"
  >
    <div class="container mx-auto px-4 md:px-8 lg:px-16">
      <h2
        class="font-benzin text-2xl md:text-4xl lg:text-5xl text-primary uppercase text-center mb-12 md:mb-16"
        :class="{ 'animate-fade-up': isVisible }"
      >
        Отзывы
      </h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <div
          v-for="(t, i) in testimonials"
          :key="i"
          :class="{ 'animate-fade-up': isVisible }"
          :style="{ animationDelay: `${0.1 + i * 0.1}s` }"
        >
          <Card>
            <div class="flex gap-0.5 mb-4 text-primary text-lg">
              <span v-for="n in (t.rating || 5)" :key="n">★</span>
            </div>
            <p class="text-text italic mb-4">«{{ t.text }}»</p>
            <div class="flex items-center gap-3">
              <img
                v-if="t.photo"
                :src="t.photo"
                :alt="t.name"
                class="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p class="font-semibold text-primary">{{ t.name }}</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </section>
</template>
