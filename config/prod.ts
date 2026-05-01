import type { UserConfigExport } from '@tarojs/cli'

export default {
  defineConstants: {
    CDN_PROTOCOL: '"https"',
  },
  mini: {},
  h5: {
    publicPath: './',
  },
} satisfies UserConfigExport
