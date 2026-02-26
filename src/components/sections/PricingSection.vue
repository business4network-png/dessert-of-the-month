<script setup>
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import { useCtaStore } from '../../stores/cta'
import Card from '../ui/Card.vue'
import Button from '../ui/Button.vue'
import Badge from '../ui/Badge.vue'
import { formatPrice } from '../../utils/format'

defineProps({
  pricing: {
    type: Array,
    default: () => [],
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
    id="pricing"
    ref="sectionRef"
    class="py-16 md:py-24"
    style="background: linear-gradient(90deg, #FEF5FD 0%, #FFF1EE 49%, #FFF1FC 100%)"
  >
    <div class="container mx-auto px-4 md:px-8 lg:px-16">
      <h2
        class="font-benzin text-2xl md:text-4xl lg:text-5xl text-primary uppercase text-center mb-12 md:mb-16"
        :class="{ 'animate-fade-up': isVisible }"
      >
        Тарифы
      </h2>

      <div class="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
        <div
          v-for="(plan, i) in pricing"
          :key="plan.id || i"
          class="relative"
          :class="{ 'animate-fade-up': isVisible }"
          :style="{ animationDelay: `${0.1 + i * 0.1}s` }"
        >
          <Card
            :class="[
              plan.popular &&
                'ring-2 ring-primary shadow-xl scale-105 md:scale-105',
            ]"
          >
            <div v-if="plan.popular" class="absolute -top-3 right-4">
              <Badge>Популярный</Badge>
            </div>

            <div class="text-center mb-6">
              <h3 class="font-benzin font-bold text-2xl text-primary uppercase mb-4">
                {{ plan.name }}
              </h3>
              <div class="flex items-baseline justify-center gap-2">
                <span class="font-benzin font-bold text-3xl md:text-4xl text-primary">
                  {{ formatPrice(plan.price) }}
                </span>
                <span
                  v-if="plan.oldPrice"
                  class="text-lg text-text/50 line-through"
                >
                  {{ formatPrice(plan.oldPrice) }}
                </span>
              </div>
            </div>

            <ul class="space-y-3 mb-8">
              <li
                v-for="(feat, j) in plan.features"
                :key="j"
                class="flex items-center gap-2 text-text"
              >
                <span class="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {{ feat }}
              </li>
            </ul>

            <Button
              :variant="plan.popular ? 'primary' : 'secondary'"
              href="#cta"
              size="md"
              class="w-full justify-center"
              @click="ctaStore.trackClick()"
            >
              {{ plan.ctaText }}
            </Button>
          </Card>
        </div>
      </div>
    </div>
  </section>
</template>
