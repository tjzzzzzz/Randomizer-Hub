
function generateRandomPassword(passwordLength = 12, includeUppercase = true, includeLowercase = true, includeNumbers = true, includeSymbols = true) {
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz'
  const numberChars = '0123456789'
  const symbolChars = '!@#$%^&*()'

  let charset = ''
  if (includeUppercase) charset += uppercaseChars
  if (includeLowercase) charset += lowercaseChars
  if (includeNumbers) charset += numberChars
  if (includeSymbols) charset += symbolChars

  let password = ""

  if (charset.length === 0) {
    throw new Error("At least one character type must be selected.")
  }

  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length)
    password += charset[randomIndex]
  }
  return password
}

export default generateRandomPassword
