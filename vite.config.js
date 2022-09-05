import ViteComponents from 'vite-plugin-components'
import Icons, { ViteIconsResolver } from 'vite-plugin-icons'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'

export default {
  server: {
    port: 3019,
  },
  base: './',
  plugins: [
    WindiCSS(),
    vue(),
    ViteComponents({
      // relative paths to the directory to search for components.
      dirs: ['src/components'],

      // valid file extensions for components.
      extensions: ['vue'],
      // search for subdirectories
      deep: true,

      // Allow subdirectories as namespace prefix for components.
      directoryAsNamespace: true,
      // Subdirectory paths for ignoring namespace prefixes
      // works when `directoryAsNamespace: true`
      globalNamespaces: [],
      customComponentResolvers: [
        ViteIconsResolver({
          componentPrefix: '',
        }),
      ],
    }),
    Icons({
      defaultStyle: 'vertical-align: middle;',
    }),
  ],
}
