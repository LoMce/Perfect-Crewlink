import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'simple-peer': path.resolve(__dirname, 'node_modules/simple-peer/simplepeer.min.js'),
		},
	},
	server: {
		port: 5173,
		strictPort: true,
	},
	build: {
		outDir: 'dist',
		emptyOutDir: true,
	},
});
