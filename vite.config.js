import { defineConfig } from 'vite'
import { fileURLToPath, URL } from "url";
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import { transformerDirectives, presetIcons, presetUno, extractorSplit } from 'unocss'
import extractorPug from '@unocss/extractor-pug'
import { viteSingleFile } from "vite-plugin-singlefile"

export default defineConfig({
  base: './',
  resolve: {
    alias: {
      "~": fileURLToPath(new URL("src", import.meta.url)),
    },
  },
  plugins: [
    vue(),
    viteSingleFile(),
    Unocss({
      transformers: [
        transformerDirectives(),
      ],
      presets: [
        presetIcons({ /* options */ }),
        presetUno()
      ],
      extractors: [
        extractorSplit,
        extractorPug()
      ]
    }),
    AutoImport({
      // targets to transform
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue\??/, // .vue
      ],
      imports: [
        'vue',
        {
          '@vueuse/core': ['useStorage'],
          '@vueuse/math': ['useClamp'],
        },
      ],
    }),
    Components({
      dirs: ['components'],
      extensions: ['vue'],
      directoryAsNamespace: false,
      globalNamespaces: ['global'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      exclude: [/node_modules/, /\.git/],
    }),
    viteBuildScript(),
  ],
  optimizeDeps: {
    include: ['vue', '@vueuse/core'],
  },
})


function viteBuildScript() {
  return {
    name: 'vite-build-script',
    transformIndexHtml(html) {
      if (process.env.NODE_ENV === 'production') {
        return html.replace(/<!-- Stats production build insert -->/, `<script async defer src="https://stats.chromatone.center/script.js" data-website-id="53f3de31-a17e-407b-a81b-a151737f0cb7"></script>
          
          <script>
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('Service Worker registered with scope: ', registration.scope);
          })
          .catch((error) => {
            console.error('Service Worker registration failed: ', error);
          });
      });
    }
  </script>`);
      }
      return html;
    },
  };
}