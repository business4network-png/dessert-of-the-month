<script setup>
import { ref } from 'vue'
import { siteConfig } from '../../config/site.config'

const isMenuOpen = ref(false)
</script>

<template>
  <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
    <div class="container mx-auto px-4 md:px-8 lg:px-16">
      <div class="flex items-center justify-between h-16 md:h-20">
        <a href="#" class="font-benzin font-bold text-xl md:text-2xl text-primary">
          {{ siteConfig.name }}
        </a>
        <nav class="hidden md:flex items-center gap-6 lg:gap-8">
          <a href="#program" class="text-text hover:text-primary transition-colors font-medium"
            >Программа</a
          >
          <a href="#pricing" class="text-text hover:text-primary transition-colors font-medium"
            >Тарифы</a
          >
          <a href="#cta" class="text-text hover:text-primary transition-colors font-medium"
            >Записаться</a
          >
        </nav>
        <button
          type="button"
          class="md:hidden p-2"
          aria-label="Меню"
          @click="isMenuOpen = !isMenuOpen"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              v-if="!isMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div
        v-show="isMenuOpen"
        class="md:hidden py-4 border-t border-gray-100 flex flex-col gap-3"
      >
        <a href="#program" class="text-text hover:text-primary" @click="isMenuOpen = false"
          >Программа</a
        >
        <a href="#pricing" class="text-text hover:text-primary" @click="isMenuOpen = false"
          >Тарифы</a
        >
        <a href="#cta" class="text-text hover:text-primary" @click="isMenuOpen = false"
          >Записаться</a
        >
      </div>
    </div>
  </header>
</template>
