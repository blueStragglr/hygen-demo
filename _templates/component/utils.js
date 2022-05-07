module.exports = {
  toPascalCase(string) {
    return `${string}`
      .replace(new RegExp(/[-_]+/, 'g'), ' ')
      .replace(new RegExp(/[^\w\s]/, 'g'), '')
      .replace(
        new RegExp(/\s+(.)(\w*)/, 'g'),
        ($1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`
      )
      .replace(new RegExp(/\w/), (s) => s.toUpperCase())
  },
  categoryIcon: {
    Chart: '📊',
    Common: '🪄',
    Form: '🔖',
    Layout: '📐',
    Objet: '🎨',
    Utils: '🛠'
  }
}
