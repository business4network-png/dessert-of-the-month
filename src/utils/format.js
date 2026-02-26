/**
 * Утилиты форматирования
 */

/**
 * Форматирует цену в рубли
 * @param {number} price
 * @returns {string}
 */
export function formatPrice(price) {
  if (typeof price !== 'number' || Number.isNaN(price)) return ''
  return new Intl.NumberFormat('ru-RU', {
    style: 'decimal',
    minimumFractionDigits: 0,
  }).format(price) + ' ₽'
}
