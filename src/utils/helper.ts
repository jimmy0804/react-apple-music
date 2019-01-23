export const getRandomHash = (numberOfChar = 5): string => {
  let text: string = ""
  const possible: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

  for (let i = 0; i < numberOfChar; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length))

  return text
}