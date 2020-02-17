# babel-plugin-transform-import-aliases

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
