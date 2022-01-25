import { Currency, FINDORA, Token } from 'tropic-swap'

export function currencyId(currency: Currency): string {
  if (currency === FINDORA) return 'ETH'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}
