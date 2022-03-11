import BigNumber from 'bignumber.js'

export const getBalanceNumber = (balance, decimals = 18) => {
  const displayBalance = new BigNumber(balance).dividedBy(new BigNumber(10).pow(decimals))
  return displayBalance.toNumber()
}

export const getFullDisplayBalance = (balance, decimals = 18) => {
  return new BigNumber(balance).dividedBy(new BigNumber(10).pow(decimals)).toFixed()
}

export const getFullMulBalance = (balance, decimals = 18) => {
  // return new BigNumber(balance).multipliedBy(new BigNumber(10).multipliedBy(decimals)).toFixed()

  const displayBalance = new BigNumber(balance).multipliedBy(new BigNumber(10).pow(decimals))
  return displayBalance.toNumber()
}
