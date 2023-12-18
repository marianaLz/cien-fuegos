import { useEffect, useState } from 'react';

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

/**
 * The `useViewHeight` function is a custom React hook that returns the height of the viewport.
 * @returns The `useViewHeight` custom hook is returning the `viewHeight` state variable.
 */
export const useViewHeight = () => {
  const [viewHeight, setViewHeight] = useState(0);
  useEffect(() => {
    if (typeof window !== 'undefined') setViewHeight(window.innerHeight);
  }, []);
  return viewHeight;
};
