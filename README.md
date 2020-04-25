<div align="right">
  <h1 align="right">
    <img height=75 src="./docs/assets/readme-header.png" alt="webpack base">
  </h1>

  <!-- prettier-ignore-start -->
  <a href="https://www.npmjs.com/package/babel-plugin-transform-import-aliases">
    <img src="https://img.shields.io/npm/v/babel-plugin-transform-import-aliases" alt="Package version" valign="text-top"/>
  </a>
  <a href="https://www.npmjs.com/package/babel-plugin-transform-import-aliases">
    <img src="https://img.shields.io/npm/dt/babel-plugin-transform-import-aliases?color=blue" alt="NPM downloads" valign="text-top" />
  </a>
  <a href="https://github.com/crystal-ball/babel-plugin-transform-import-aliases/actions?workflow=CI%2FCD">
    <img src="https://github.com/crystal-ball/babel-plugin-transform-import-aliases/workflows/CI%2FCD/badge.svg" alt="Build status" valign="text-top" />
  </a>
  <a href="https://snyk.io/test/github/crystal-ball/babel-plugin-transform-import-aliases?targetFile=package.json">
    <img src="https://snyk.io/test/github/crystal-ball/babel-plugin-transform-import-aliases/badge.svg?targetFile=package.json" alt="Known vulnerabilities" valign="text-top" />
  </a>
  <a href="https://codeclimate.com/github/crystal-ball/babel-plugin-transform-import-aliases/test_coverage">
    <img src="https://api.codeclimate.com/v1/badges/778c0f22eb9fd8b696e9/test_coverage" alt="Test coverage" valign="text-top" />
  </a>
  <a href="https://codeclimate.com/github/crystal-ball/babel-plugin-transform-import-aliases/maintainability">
    <img src="https://api.codeclimate.com/v1/badges/778c0f22eb9fd8b696e9/maintainability" alt="Maintainability" valign="text-top" />
  </a>
  <code>:status&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>

  <br />
  <a href="https://renovatebot.com/">
    <img src="https://img.shields.io/badge/Renovate-enabled-32c3c2.svg" alt="Renovate" valign="text-top" />
  </a>
  <a href="https://commitizen.github.io/cz-cli/">
    <img src="https://img.shields.io/badge/Commitizen-%E2%9C%93%20friendly-10e67b" alt="Commitizen friendly" valign="text-top" />
  </a>
  <a href="https://github.com/crystal-ball/babel-plugin-transform-import-aliases#workspaces">
    <img src="https://img.shields.io/badge/ZenHub-managed-5e60ba.svg" alt="ZenHub" valign="text-top" />
  </a>
  <a href="https://semantic-release.gitbook.io/semantic-release/">
    <img src="https://img.shields.io/badge/%F0%9F%93%A6%F0%9F%9A%80-semantic_release-e10079.svg" alt="Semantic Release" valign="text-top"/>
  </a>
  <a href="./CODE_OF_CONDUCT.md">
    <img src="https://img.shields.io/badge/Contributor%20Covenant-v2.0-de8cf2.svg" alt="Contributor Covenant" valign="text-top" />
  </a>
  <code>:integrations</code>

  <br />
  <a href="https://github.com/crystal-ball">
    <img src="https://img.shields.io/badge/%F0%9F%94%AE%E2%9C%A8-contains_magic-D831D7.svg" alt="Contains magic" valign="text-top" />
  </a>
  <a href="https://github.com/crystal-ball/crystal-ball.github.io">
    <img src="https://img.shields.io/badge/%F0%9F%92%96%F0%9F%8C%88-full_of_love-F5499E.svg" alt="Full of love" valign="text-top" />
  </a>
  <code>:flair&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>
  <!-- prettier-ignore-end -->
</div>

Babel transform will convert an import alias, eg `@` to the specified path. This
enables you to transform convenience aliases into resolveable paths with Babel.

```javascript
{
  plugins: [
    [
      'babel-plugin-transform-import-aliases',
      { aliases: { '@': path.resolve(fs.realpathSync(process.cwd()), 'src') } },
    ],
  ]
}
```
