export function formatPrice(price: number): string {
  return price.toLocaleString('ru-RU') + ' ₽';
}

export function formatNumber(num: number): string {
  return num.toLocaleString('ru-RU');
}

/**
 * Расчет аннуитетного платежа по кредиту
 * @param carPrice стоимость автомобиля в рублях
 * @param downPayment первоначальный взнос в рублях
 * @param months срок кредита в месяцах
 * @param annualRate процентная ставка годовых (например, 5 для 5%)
 */
export function calculateMonthlyPayment(
  carPrice: number,
  downPayment: number,
  months: number,
  annualRate: number = 5.0
): number {
  const loanAmount = Math.max(0, carPrice - downPayment);
  if (loanAmount <= 0) return 0;
  if (months <= 0) return loanAmount;

  const monthlyRate = annualRate / 100 / 12;
  const payment =
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1);

  return Math.round(payment);
}
