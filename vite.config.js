import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

export default defineConfig({
	plugins: [
		vue(),
		vueJsx(),
		Components({
			resolvers: [
				AntDesignVueResolver({
					importStyle: false, // css in js
				}),
			],
		}),
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
	server: {
		port: 3000,
		compression: true,
	},
	vueCompilerOptions: {
		productionMode: true,
	},
	build: {
		cssCodeSplit: false,
		rollupOptions: {
			input: 'index.html',
			output: {
				entryFileNames: `assets/[name].js`,
				chunkFileNames: `assets/[name].js`,
				assetFileNames: `assets/[name].[ext]`,
				manualChunks: { vue: ['vue'] },
			},
		},
		// habilitar la generación de service workers
		sourcemap: true,
		assetsInlineLimit: 4096,
		chunkSizeWarningLimit: 1500,
		manifest: true,
		outDir: 'dist',
	},
});
