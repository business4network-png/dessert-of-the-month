<script setup>
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import Card from '../ui/Card.vue'
import Badge from '../ui/Badge.vue'
import { formatPrice } from '../../utils/format'

defineProps({
  desserts: {
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
    ref="sectionRef"
    class="py-16 md:py-24"
    style="background: linear-gradient(180deg, #FFF1FC 0%, #FEF5FD 100%)"
  >
    <div class="container mx-auto px-4 md:px-8 lg:px-16">
      <h2
        class="font-benzin text-2xl md:text-4xl lg:text-5xl text-primary uppercase text-center mb-12 md:mb-16"
        :class="{ 'animate-fade-up': isVisible }"
      >
        Наши десерты
      </h2>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
        <div
          v-for="(dessert, i) in desserts"
          :key="dessert.id || i"
          :class="{ 'animate-fade-up': isVisible }"
          :style="{ animationDelay: `${0.1 + i * 0.05}s` }"
        >
          <Card padding="none" class="group overflow-hidden">
            <div class="relative aspect-[4/3] overflow-hidden">
              <img
                :src="dessert.image || '/images/dessert-1.png'"
                :alt="dessert.name"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div v-if="dessert.badge" class="absolute top-3 right-3">
                <Badge>{{ dessert.badge }}</Badge>
              </div>
            </div>
            <div class="p-5 md:p-6">
              <h3 class="font-benzin font-semibold text-lg text-primary uppercase mb-2">
                {{ dessert.name }}
              </h3>
              <p class="text-text/80 text-sm leading-relaxed line-clamp-3">
                {{ dessert.description }}
              </p>
              <p
                v-if="dessert.price"
                class="mt-3 font-benzin font-bold text-primary"
              >
                {{ formatPrice(dessert.price) }}
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </section>
</template>
