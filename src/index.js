'use strict'

module.exports = function transformAlias({ types }) {
  /**
   * Check if the import value matches a configured alias and replace with
   * alias path if matches
   * @param {Object} aliases
   * @param {Object} importSource
   * @param {string} value
   */
  function checkAndReplaceImport(aliases, importSource, value) {
    Object.keys(aliases).forEach((alias) => {
      if (value.startsWith(`${alias}/`)) {
        importSource.replaceWith(
          types.stringLiteral(value.replace(alias, aliases[alias])),
        )
      }
    })
  }

  return {
    visitor: {
      ImportDeclaration(path, state) {
        const { aliases } = state.opts
        const importSource = path.get('source')
        const { value } = importSource.node

        checkAndReplaceImport(aliases, importSource, value)
      },

      CallExpression(path, state) {
        const { aliases } = state.opts
        const callee = path.get('callee')

        if (callee.isImport()) {
          const importSource = path.get('arguments.0')
          const { value } = importSource.node

          checkAndReplaceImport(aliases, importSource, value)
        }
      },
    },
  }
}
