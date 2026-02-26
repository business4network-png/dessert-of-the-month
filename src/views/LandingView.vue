<script setup>
import { useMonthlyData } from '../composables/useMonthlyData'
import Header from '../components/layout/Header.vue'
import Hero from '../components/layout/Hero.vue'
import Footer from '../components/layout/Footer.vue'
import WhoItFor from '../components/sections/WhoItFor.vue'
import ProgramSections from '../components/sections/ProgramSections.vue'
import DessertGrid from '../components/sections/DessertGrid.vue'
import StatsSection from '../components/sections/StatsSection.vue'
import AuthorBlock from '../components/sections/AuthorBlock.vue'
import PricingSection from '../components/sections/PricingSection.vue'
import TestimonialsSection from '../components/sections/TestimonialsSection.vue'
import CTA from '../components/sections/CTA.vue'

const { data } = useMonthlyData()
</script>

<template>
  <div class="min-h-screen overflow-x-hidden">
    <Header />
    <Hero :hero="data.hero" />
    <StatsSection :stats="data.stats" />
    <WhoItFor :for-whom="data.forWhom" />
    <ProgramSections :sections="data.programSections" />
    <DessertGrid :desserts="data.desserts" />
    <AuthorBlock :author="data.author" />
    <PricingSection :pricing="data.pricing" />
    <TestimonialsSection :testimonials="data.testimonials" />
    <CTA
      title="Хотите научиться готовить пасхальные десерты?"
      :description="data.meta?.description || 'Обучение по пасхальной выпечке — от домашних результатов до прибыльных заказов'"
    />
    <Footer />
  </div>
</template>
