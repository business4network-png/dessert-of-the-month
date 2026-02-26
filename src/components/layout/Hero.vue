<script setup>
import { onMounted, ref } from 'vue'
import { useCtaStore } from '../../stores/cta'
import Button from '../ui/Button.vue'

defineProps({
  hero: {
    type: Object,
    required: true,
    default: () => ({}),
  },
})

const isVisible = ref(false)
const ctaStore = useCtaStore()

onMounted(() => {
  setTimeout(() => (isVisible.value = true), 100)
})
</script>

<template>
  <section
    class="relative min-h-[85vh] md:min-h-screen flex items-center overflow-hidden"
    style="background: linear-gradient(90deg, #FEF5FD 0%, #FFF1EE 49%, #FFF1FC 100%)"
  >
    <div class="container mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-24">
      <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div class="order-2 lg:order-1 space-y-6 lg:space-y-8">
          <h1
            class="font-benzin font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary uppercase leading-tight"
            :class="{ 'animate-fade-up': isVisible }"
            style="animation-delay: 0.1s"
          >
            {{ hero.title }}
          </h1>
          <p
            class="text-lg md:text-xl lg:text-2xl text-text max-w-xl font-medium leading-relaxed"
            :class="{ 'animate-fade-up': isVisible }"
            style="animation-delay: 0.2s"
          >
            {{ hero.subtitle }}
          </p>
          <div
            class="flex flex-wrap gap-4"
            :class="{ 'animate-fade-up': isVisible }"
            style="animation-delay: 0.3s"
          >
            <Button
              :href="hero.ctaLink || '#program'"
              variant="primary"
              size="lg"
              @click="ctaStore.trackClick()"
            >
              {{ hero.ctaText }}
            </Button>
            <Button
              :href="hero.ctaSecondaryLink || '#pricing'"
              variant="secondary"
              size="md"
            >
              {{ hero.ctaSecondary }}
            </Button>
          </div>
        </div>
        <div
          v-if="hero.heroImage || hero.backgroundImage"
          class="order-1 lg:order-2 relative flex justify-center lg:justify-end"
          :class="{ 'animate-fade-in': isVisible }"
          style="animation-delay: 0.2s"
        >
          <div class="relative">
            <div
              class="absolute -left-4 -bottom-4 w-full h-full bg-white/40 rounded-3xl -z-10 transform rotate-2"
            />
            <img
              :src="hero.heroImage || hero.backgroundImage"
              alt=""
              class="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-3xl object-cover shadow-2xl"
              loading="eager"
              fetchpriority="high"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
