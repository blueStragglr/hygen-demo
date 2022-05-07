var { toPascalCase, categoryIcon } = require('../utils.js')

module.exports = {
  prompt: ({ prompter, args }) =>
    prompter
      .prompt({
        type: 'input',
        name: 'name',
        message: '카테고리 컴포넌트 이름을 snake-case 로 입력하세요.'
      })
      .then(({ name }) => {
        if (!name) {
          throw new Error('컴포넌트 이름을 입력하세요!')
        }
        if (new RegExp(/[^a-z\-]/).test(name)) {
          throw new Error('컴포넌트 이름은 snake-case 이어야 합니다.')
        }

        return prompter
          .select({
            type: 'input',
            name: 'category',
            message: '카테고리 컴포넌트의 카테고리를 선택하세요.',
            choices: ['animation', 'common', 'core', 'util']
          })
          .then((choice) => {
            return {
              category: choice,
              name: name,
              pascal: toPascalCase(name),
              categoryIcon: categoryIcon[choice],
              args
            }
          })
      })
}
