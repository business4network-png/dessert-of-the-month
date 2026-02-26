/**
 * Composable для работы с данными месяца
 * Единая точка доступа к monthlyData + логика генерации desserts
 */

import { computed } from 'vue'
import { monthlyData } from '../data/currentMonthData'

/**
 * Генерирует массив всех десертов из programSections
 */
function buildDessertsFromProgram() {
  const result = []
  let id = 1
  const imagePool = ['/images/dessert-1.png', '/images/dessert-2.png', '/images/dessert-3.png']

  for (const section of monthlyData.programSections) {
    for (const item of section.items) {
      result.push({
        id: id++,
        name: item.name,
        description: item.description || '',
        image: imagePool[(id - 1) % imagePool.length],
        price: item.price ?? null,
        badge: section.id === 'decor' ? 'Бонус' : null,
      })
    }
  }
  return result
}

/**
 * Возвращает данные месяца с вычисленными полями
 */
export function useMonthlyData() {
  const desserts = computed(() => {
    const explicit = monthlyData.desserts
    if (Array.isArray(explicit) && explicit.length > 0) return explicit
    return buildDessertsFromProgram()
  })

  const data = computed(() => ({
    ...monthlyData,
    desserts: desserts.value,
  }))

  return { data, monthlyData: data }
}
