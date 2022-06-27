var { toPascalCase } = require('../utils.js')

module.exports = {
  prompt: ({ prompter, args }) =>
    prompter
      .prompt({
        type: 'input',
        name: 'name',
        message: '컴포넌트 이름을 kebab-case 로 입력하세요.'
      })
      .then(({ name }) => {
        if (!name) {
          throw new Error('컴포넌트 이름을 입력하세요!')
        }
        if (new RegExp(/[^a-z\-]/).test(name)) {
          throw new Error('컴포넌트 이름은 kebab-case 이어야 합니다.')
        }
        return { name: name, pascal: toPascalCase(name), args }
      })
}
