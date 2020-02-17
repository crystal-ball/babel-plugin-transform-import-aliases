# babel-plugin-transform-import-aliases

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
