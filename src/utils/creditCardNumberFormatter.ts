export default function formatCardNumber(cardNumber: string) {
  if (cardNumber.length !== 16 || !/^\d+$/.test(cardNumber)) {
    throw new Error('Invalid card number')
  }
  const formattedCardNumber = `${cardNumber.slice(0, 4)} **** **** ${cardNumber.slice(12)}`

  return formattedCardNumber
}

export function formatToShortCardNumber(cardNumber: string) {
  if (cardNumber.length !== 16 || !/^\d+$/.test(cardNumber)) {
    throw new Error('Invalid card number')
  }
  const formattedCardNumber = `${cardNumber.slice(0, 4)} ****`

  return formattedCardNumber
}
