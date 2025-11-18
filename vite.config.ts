import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig(({ command }) => {
  // Development server config
  if (command === 'serve') {
    return {
      root: '.',
      publicDir: 'public',
      resolve: {
        alias: {
          '@': resolve(__dirname, 'src')
        }
      }
    }
  }
  
  // Build config
  return {
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        formats: ['es'],
        fileName: () => 'sval.js'
      },
      rollupOptions: {
        external: ['acorn']
      },
      sourcemap: true,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: false,
          passes: 2
        },
        format: {
          comments: false
        }
      }
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    plugins: [
      dts({
        insertTypesEntry: true,
        outDir: 'types',
        rollupTypes: true,
        logLevel: 'error' // Only show errors, suppress warnings
      })
    ]
  }
})
