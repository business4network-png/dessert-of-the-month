<script setup>
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import { useCtaStore } from '../../stores/cta'
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
    class="py-8 sm:py-12 md:py-16 lg:py-24 bg-[#F5F5F5]"
  >
    <div class="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
      <h2
        class="font-benzin font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary uppercase text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
        :class="{ 'animate-fade-up': isVisible }"
      >
        Тарифы
      </h2>

      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-[440px] sm:max-w-[680px] md:max-w-[880px] mx-auto"
        :class="{ 'animate-fade-up': isVisible }"
      >
        <div
          v-for="(plan, i) in pricing"
          :key="plan.id || i"
          class="relative w-full max-w-[420px] mx-auto md:max-w-none"
          :class="{ 'animate-fade-up': isVisible }"
          :style="{ animationDelay: `${0.1 + i * 0.1}s` }"
        >
          <!-- Card: white, rounded, shadow -->
          <div
            class="relative w-full rounded-[20px] bg-white p-5 sm:p-6 shadow-[0px_2px_12px_rgba(0,0,0,0.08)] overflow-visible"
          >
            <!-- 1. Header tag: ЛАЙТ = black, МАКСИ = orange bg -->
            <div
              class="absolute -top-px -left-px px-5 py-2.5 rounded-br-[20px] font-benzin font-bold text-sm uppercase text-white"
              :class="plan.popular ? 'bg-[#FF703E]' : 'bg-[#000]'"
            >
              {{ plan.name }}
            </div>

            <!-- 2. Price: strikethrough above top-right, main price centered -->
            <div class="pt-14 sm:pt-16 pb-4">
              <div class="relative text-center">
                <span
                  v-if="plan.oldPrice"
                  class="absolute -top-[30px] right-0 text-sm text-[#AAAAAA] line-through font-benzin"
                >
                  {{ formatPrice(plan.oldPrice) }}
                </span>
                <span
                  class="font-benzin font-bold text-3xl sm:text-4xl md:text-[48px] text-[#333] uppercase"
                >
                  {{ formatPrice(plan.price) }}
                </span>
              </div>
            </div>

            <!-- 3. Installment: light yellow/cream block — число и ₽/месяц в одну строку -->
            <div
              class="rounded-lg bg-[#FFF8DC] py-4 px-4 flex flex-col items-center justify-center gap-0.5 mb-4"
            >
              <div class="flex items-baseline gap-2 flex-nowrap whitespace-nowrap">
                <span class="font-benzin font-bold text-xl sm:text-2xl md:text-3xl text-[#333] shrink-0">
                  {{ plan.installmentPerMonth || Math.round(plan.price / 6) }}
                </span>
                <span class="font-benzin font-medium text-base sm:text-lg text-[#333] shrink-0">₽/месяц</span>
              </div>
              <span class="font-manrope font-normal text-sm text-[#333]">
                Рассрочка на 6 месяцев
              </span>
            </div>

            <!-- 4. Оплатить полностью — bright orange -->
            <a
              href="#cta"
              class="flex flex-col items-center justify-center w-full min-h-[70px] rounded-lg bg-[#FF703E] py-3 px-4 text-center hover:opacity-95 transition-opacity mb-3"
              @click="ctaStore.trackClick()"
            >
              <span class="font-manrope font-extrabold text-base text-white">
                Оплатить полностью
              </span>
              <span class="font-manrope font-normal text-xs text-white/90 mt-0.5">
                Любой картой или СБП
              </span>
            </a>

            <!-- 5. Оформить рассрочку — фиксированная высота как у других кнопок -->
            <a
              href="#cta"
              class="relative flex items-center h-[70px] rounded-lg bg-[#FFF8DC] py-3 px-4 mb-3 gap-3"
              @click="ctaStore.trackClick()"
            >
              <div class="flex-shrink-0 w-8 h-8 rounded-full bg-[#FFDF35] flex items-center justify-center text-[#333] font-bold text-sm">
                T
              </div>
              <span class="flex-1 min-w-0 text-left">
                <span class="block font-manrope font-extrabold text-base text-[#333] leading-tight">
                  Оформить рассрочку
                </span>
                <span class="block font-manrope font-normal text-xs text-[#333]/80 leading-tight">
                  0% переплат. Первый платёж через месяц
                </span>
              </span>
              <span
                class="flex-shrink-0 px-2 py-0.5 rounded-md bg-white text-[#333] text-xs font-semibold border border-gray-200"
              >
                0-0-6
              </span>
            </a>

            <!-- 6. Оплатить частями — black section only -->
            <div class="mb-2">
              <a
                href="#cta"
                class="flex flex-col items-center justify-center w-full min-h-[70px] rounded-lg bg-[#333] py-3 px-4 text-center hover:opacity-95 transition-opacity"
                @click="ctaStore.trackClick()"
              >
                <span class="font-manrope font-extrabold text-base text-white">
                  Оплатить частями
                </span>
                <span class="font-manrope font-normal text-xs text-white/80 mt-0.5">
                  25% сейчас. Без паспорта
                </span>
              </a>
              <!-- Logos BELOW black section, on white card background -->
              <div class="flex items-center justify-center gap-4 py-3">
                <span class="flex items-center gap-1.5 text-sm text-[#333] font-medium">
                  <span class="flex gap-0.5">
                    <span class="w-0.5 h-4 bg-[#333]" />
                    <span class="w-0.5 h-4 bg-[#333]" />
                    <span class="w-0.5 h-4 bg-[#333]" />
                    <span class="w-0.5 h-4 bg-[#333]" />
                  </span>
                  долями
                </span>
                <span class="w-px h-5 bg-[#CCC]" />
                <span class="text-sm text-[#333] font-medium">Яндекс Сплит</span>
              </div>
            </div>

            <!-- 7. Забронировать место — light grey, same height -->
            <a
              href="#cta"
              class="flex items-center justify-center w-full min-h-[70px] py-3 rounded-lg bg-[#EEEEEE] text-center font-manrope font-normal text-base text-[#333] hover:bg-[#E5E5E5] transition-colors mb-3"
              @click="ctaStore.trackClick()"
            >
              Забронировать место - 1 000 ₽
            </a>

            <!-- 8. Задать вопрос — transparent, blue link with icon -->
            <a
              href="#cta"
              class="flex items-center justify-center gap-2 w-full py-2 text-[#007BFF] hover:underline"
              @click="ctaStore.trackClick()"
            >
              <svg
                class="w-5 h-5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
              <span class="font-manrope font-normal text-base">Задать вопрос</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
