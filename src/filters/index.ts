
// 中间...
export function encryption(value: any) {
  if (!value) return value;

  const start = value.substr(0, 6)
  const end = value.substr(-6)
  return start + '……' + end
}

// 后面...
export function encryptionEnd(value: any) {
  if (!value) return value;
  if (value.length < 6) return value;
  const start = value.substr(0, 9)
  return start + '…'
}



