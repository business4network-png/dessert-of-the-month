<script setup>
import { siteConfig } from '../../config/site.config'

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-text text-white py-12 md:py-16">
    <div class="container mx-auto px-4 md:px-8 lg:px-16">
      <div class="flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="font-benzin text-xl md:text-2xl text-primary">{{ siteConfig.name }}</div>
        <nav class="flex flex-wrap justify-center gap-6 md:gap-8">
          <a href="#program" class="hover:text-primary transition-colors">Программа</a>
          <a href="#pricing" class="hover:text-primary transition-colors">Тарифы</a>
          <a href="#cta" class="hover:text-primary transition-colors">Записаться</a>
        </nav>
      </div>
      <div class="mt-8 pt-8 border-t border-white/20 text-center text-sm text-white/70">
        © {{ currentYear }} {{ siteConfig.name }}. Все права защищены.
      </div>
    </div>
  </footer>
</template>
