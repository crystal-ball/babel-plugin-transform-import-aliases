'use strict'

const t = require('@babel/types')

/**
 * Check if the import value matches a configured alias and replace with
 * alias path if matches
 * @param {Object} aliases Import alias to paths configuration map
 * @param {Object} importStringLiteral The StringLiteral node of the import expression
 * @param {string} filename Full path to the file currently being compiled
 */
function checkAndReplaceImport(aliases, importStringLiteral, filename) {
  const { value: originalImportPath } = importStringLiteral.node

  Object.keys(aliases).forEach((alias) => {
    if (originalImportPath.startsWith(`${alias}/`)) {
      const aliasPath = aliases[alias]

      // Relative to alias import
      if (filename.startsWith(aliasPath)) {
        const aliasRelativePath = filename.replace(aliasPath, '')
        const directories = aliasRelativePath.match(/\//g)
        // There's an extra directory from the filename in the path that needs
        // to be ignored
        directories.pop()
        const relativePath = directories.map(() => '../').join('')
        // Replace alias + /
        importStringLiteral.replaceWith(
          t.stringLiteral(originalImportPath.replace(`${alias}/`, relativePath)),
        )
      } else {
        importStringLiteral.replaceWith(
          t.stringLiteral(originalImportPath.replace(alias, aliasPath)),
        )
      }
    }
  })
}

module.exports = function transformImportAliases() {
  return {
    visitor: {
      ImportDeclaration(path, { filename, opts }) {
        const { aliases } = opts

        // In import declaration the import string is the source,
        // eg `import utils from '@/utils'`
        checkAndReplaceImport(aliases, path.get('source'), filename)
      },

      CallExpression(path, { filename, opts }) {
        const { aliases } = opts

        if (path.get('callee').isImport()) {
          // In dynamic imports the import string is the first argument to
          // `import`, eg: import('@/utils')
          checkAndReplaceImport(aliases, path.get('arguments.0'), filename)
        }
      },
    },
  }
}
