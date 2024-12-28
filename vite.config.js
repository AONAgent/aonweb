import { defineConfig } from 'vite'
import packageJson from './package.json';
// import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [react()],
  server: {
    host: '0.0.0.0', // 这里可以指定 IP 地址，比如 '192.168.1.100'
    port: 5174, // 你希望使用的端口
  },
  define: {
    __VERSION__: JSON.stringify(packageJson.version),
  },
  build: {
    lib: {
      entry: './src/main.js',
      name: 'aonweb',
      fileName: (format) => `aon-web.${format}.js`
    },
    // minify: false,
    // optimizeDeps: {
    //   include: ['@supabase/supabase-js']
    // }
    // rollupOptions: {
    //   external: ['web3', 'web3-eth-accounts'],
    //   output: {
    //     globals: {
    //       'web3': 'Web3',
    //       'web3-eth-accounts': 'Web3EthAccounts'
    //     }
    //   }
    // }
  }
})
