import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    legacy({
      // targets: ["ie >= 11"],
      "targets": {
        'ie': 9
      },
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
      polyfills: [
        'es.object.define-properties',
        'es.object.define-property',
        'es.object.define-setter',
        'es.array.iterator',
        'es.promise',
        'es.object.assign',
        'es.promise.finally'
      ]
    }),
  ],
});
