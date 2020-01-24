'use strict'

module.exports = function transformAlias({ types: t }) {
  return {
    visitor: {
      ImportDeclaration(path, state) {
        const { aliases } = state.opts
        const importSource = path.get('source')
        const { value } = importSource.node

        Object.keys(aliases).forEach(alias => {
          if (value.startsWith(`${alias}/`)) {
            importSource.replaceWith(
              t.stringLiteral(value.replace(alias, aliases[alias])),
            )
          }
        })
      },

      CallExpression(path, state) {
        const { aliases } = state.opts
        const callee = path.get('callee')

        if (callee.isImport()) {
          const importSource = path.get('arguments.0')
          const { value } = importSource.node

          Object.keys(aliases).forEach(alias => {
            if (value.startsWith(`${alias}/`)) {
              importSource.replaceWith(
                t.stringLiteral(value.replace(alias, aliases[alias])),
              )
            }
          })
        }
      },
    },
  }
}
