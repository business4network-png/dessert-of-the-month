<script setup>
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import Button from '../ui/Button.vue'

defineProps({
  author: {
    type: Object,
    default: () => ({}),
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
        Об авторе
      </h2>

      <div class="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
        <div
          class="flex justify-center lg:justify-start"
          :class="{ 'animate-fade-up': isVisible }"
          style="animation-delay: 0.1s"
        >
          <div class="relative">
            <div
              class="absolute -left-3 -bottom-3 w-full h-full bg-primary/10 rounded-3xl -z-10 transform rotate-2"
            />
            <img
              :src="author.photo || '/images/hero-desserts-4d292b.png'"
              :alt="author.name"
              class="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-3xl object-cover shadow-xl"
              loading="lazy"
            />
          </div>
        </div>

        <div class="lg:col-span-2 space-y-6">
          <div :class="{ 'animate-fade-up': isVisible }" style="animation-delay: 0.15s">
            <h3 class="font-benzin font-bold text-2xl md:text-3xl text-primary uppercase mb-2">
              {{ author.name }}
            </h3>
            <p class="text-lg md:text-xl text-text font-medium">{{ author.title }}</p>
            <p class="text-text/80 text-base md:text-lg mt-2">{{ author.description }}</p>
          </div>

          <div
            class="grid grid-cols-2 md:grid-cols-3 gap-4"
            :class="{ 'animate-fade-up': isVisible }"
            style="animation-delay: 0.2s"
          >
            <div
              v-for="(stat, i) in author.stats"
              :key="i"
              class="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-4 md:p-5 text-center"
            >
              <p class="font-benzin font-bold text-xl md:text-2xl text-primary">
                {{ stat.value }}
              </p>
              <p class="text-sm md:text-base text-text/80 mt-1">{{ stat.label }}</p>
            </div>
          </div>

          <div
            v-if="author.licenseText"
            class="bg-primary/5 rounded-2xl p-6 flex items-start gap-4"
            :class="{ 'animate-fade-up': isVisible }"
            style="animation-delay: 0.25s"
          >
            <div
              class="flex-shrink-0 w-12 h-12 rounded-xl bg-white shadow flex items-center justify-center"
            >
              <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <div>
              <p class="font-medium text-text">{{ author.licenseText }}</p>
              <p v-if="author.license" class="text-sm text-text/70 mt-1">{{ author.license }}</p>
            </div>
          </div>

          <div :class="{ 'animate-fade-up': isVisible }" style="animation-delay: 0.3s">
            <Button href="#cta" variant="primary" size="md">Задать вопрос</Button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
