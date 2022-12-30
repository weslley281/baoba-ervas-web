export function formatToBRCashString(value: number) {
  const valueFormatted = value
    .toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    })
    .replace('R$', '');

  return valueFormatted;
}
