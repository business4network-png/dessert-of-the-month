<script setup>
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import Icon from '../ui/Icon.vue'
import Card from '../ui/Card.vue'

defineProps({
  forWhom: {
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
  <section ref="sectionRef" class="py-16 md:py-24 bg-white">
    <div class="container mx-auto px-4 md:px-8 lg:px-16">
      <h2
        class="font-benzin text-2xl md:text-4xl lg:text-5xl text-primary uppercase text-center mb-12 md:mb-16"
        :class="{ 'animate-fade-up': isVisible }"
      >
        Курс подойдёт тем, кто хочет:
      </h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(item, i) in forWhom"
          :key="i"
          :class="{ 'animate-fade-up': isVisible }"
          :style="{ animationDelay: `${0.1 + i * 0.06}s` }"
        >
          <Card class="h-full">
            <div class="flex items-start gap-4">
              <span
                class="flex-shrink-0 w-12 h-12 rounded-full bg-primary/15 text-primary flex items-center justify-center text-2xl"
              >
                {{ item.icon }}
              </span>
              <div>
                <h3 class="font-benzin font-semibold text-lg text-primary uppercase mb-1">
                  {{ item.title }}
                </h3>
                <p class="text-text/80">{{ item.description }}</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </section>
</template>
