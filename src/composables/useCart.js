/**
 * Composable для корзины / заказов
 * Заглушка для будущего масштабирования
 */

import { ref, computed } from 'vue'

export function useCart() {
  const items = ref([])

  const total = computed(() =>
    items.value.reduce((sum, item) => sum + (item.price || 0) * (item.quantity || 1), 0)
  )

  function addItem(item) {
    items.value.push({ ...item, quantity: 1 })
  }

  function removeItem(index) {
    items.value.splice(index, 1)
  }

  return { items, total, addItem, removeItem }
}
