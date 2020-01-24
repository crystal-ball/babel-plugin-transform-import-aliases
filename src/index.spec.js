'use strict'

const babel = require('@babel/core')

const plugin = require('./index')

// Runs relative to repo root
const content = `import Rad from '@/dux/rad'
import { css } from '@emotion/core'
import { ENV } from 'ENV/dev'
const HomeScreen = import(/* webpackChunkName: "HomeScreen" */ '@/screens/HomeScreen/HomeScreen')

function load() {}
const FakeScreen = load(/* webpackChunkName: "HomeScreen" */ '@/screens/HomeScreen/HomeScreen')
`

it('transforms imports', () => {
  const { code } = babel.transform(content, {
    plugins: [[plugin, { aliases: { '@': '/User/Rad/Code/src', ENV: '/tmp/env' } }]],
  })
  expect(code).toMatchSnapshot()
})
