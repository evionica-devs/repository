/// <reference types="vitest" />
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [],
  build:   {
    emptyOutDir: true,
    lib:         {
      entry:    "src/index.ts",
      formats:  [ "es", "cjs" ],
      fileName: (format) => {
        const ext = (format === "es") ? "mjs" : "js"

        return `index.${ext}`
      },
    },
    minify:               "esbuild",
    modulePreload:        false,
    outDir:               "dist",
    reportCompressedSize: true,
    rollupOptions:        {
      external: [ "vue", "lodash-es" ],
      output:   {
        globals: {
          "vue":       "Vue",
          "lodash-es": "_",
        },
      },
    },
    target: "esnext",
  },
  test: {
    include:     [ "**/*.test.ts" ],
    environment: "jsdom",
    coverage:    {
      enabled:  true,
      include:  [ "src/**/*.ts" ],
      provider: "c8",
    },
    setupFiles: [ "vitest.setup.ts" ],
  },
})
