/**
 * The formatPrice function formats a given price value as a currency in Mexican Pesos (MXN).
 * @param price - The `price` parameter is the numerical value that you want to format as a price.
 */
export const formatPrice = (price) =>
  new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    currencyDisplay: 'symbol',
  }).format(price);
