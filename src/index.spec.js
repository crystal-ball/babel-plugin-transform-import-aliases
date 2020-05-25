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

it('transforms imports', async () => {
  const { code } = await babel.transformAsync(content, {
    plugins: [[plugin, { aliases: { '@': '/User/Rad/Code/src', 'ENV': '/tmp/env' } }]],
    // Tests the relative alias transforms
    filename: '/User/Rad/Code/src/components/App/App.ts',
  })

  expect(code).toMatchSnapshot()
})
