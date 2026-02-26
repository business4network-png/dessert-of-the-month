<script setup>
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import { useCtaStore } from '../../stores/cta'
import Button from '../ui/Button.vue'

defineProps({
  title: { type: String, default: 'Хотите научиться готовить пасхальные десерты?' },
  description: {
    type: String,
    default: 'Обучение по пасхальной выпечке — от домашних результатов до прибыльных заказов',
  },
})

const sectionRef = ref(null)
const isVisible = ref(false)
const ctaStore = useCtaStore()

useIntersectionObserver(sectionRef, ([{ isIntersecting }]) => {
  if (isIntersecting) isVisible.value = true
})
</script>

<template>
  <section
    id="cta"
    ref="sectionRef"
    class="py-20 md:py-28"
    style="background: linear-gradient(90deg, #FEF5FD 0%, #FFF1EE 49%, #FFF1FC 100%)"
  >
    <div class="container mx-auto px-4 md:px-8 lg:px-16 text-center">
      <div
        class="max-w-2xl mx-auto"
        :class="{ 'animate-fade-up': isVisible }"
      >
        <h2 class="font-benzin text-2xl md:text-4xl lg:text-5xl text-primary uppercase mb-6">
          {{ title }}
        </h2>
        <p class="text-lg md:text-xl text-text mb-8">{{ description }}</p>
        <Button
          href="#"
          variant="primary"
          size="lg"
          @click="ctaStore.trackClick()"
        >
          Хочу на курс
        </Button>
      </div>
    </div>
  </section>
</template>
