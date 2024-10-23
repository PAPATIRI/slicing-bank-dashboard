// utils/formatBalance.ts

export const formatBalance = (balance: number): string => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })

  // Check if the balance is negative
  if (balance < 0) {
    return `-${formatter.format(Math.abs(balance))}` // Format and add negative sign
  } else {
    return `+${formatter.format(balance)}` // Format and add positive sign
  }
}
