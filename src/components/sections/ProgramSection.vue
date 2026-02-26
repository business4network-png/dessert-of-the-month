<script setup>
import Card from '../ui/Card.vue'
import { formatPrice } from '../../utils/format'

defineProps({
  section: {
    type: Object,
    required: true,
    default: () => ({ title: '', items: [] }),
  },
})
</script>

<template>
  <Card>
    <h3 class="font-benzin font-semibold text-xl md:text-2xl text-primary uppercase mb-4 md:mb-6">
      {{ section.title }}
    </h3>
    <ul class="space-y-3">
      <li
        v-for="(item, i) in section.items"
        :key="i"
        class="flex flex-col gap-1"
      >
        <div class="flex items-start justify-between gap-3">
          <span class="font-medium text-text">{{ item.name }}</span>
          <span v-if="item.price" class="font-benzin text-primary flex-shrink-0">
            {{ formatPrice(item.price) }}
          </span>
        </div>
        <p v-if="item.description" class="text-sm text-text/70 pl-4 border-l-2 border-primary/30">
          {{ item.description }}
        </p>
      </li>
    </ul>
  </Card>
</template>
