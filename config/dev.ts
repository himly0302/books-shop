import type { UserConfigExport } from '@tarojs/cli'

export default {
  defineConstants: {
    CDN_PROTOCOL: '"http"',
  },
  logger: {
    quiet: false,
    stats: true,
  },
  mini: {},
  h5: {},
} satisfies UserConfigExport
