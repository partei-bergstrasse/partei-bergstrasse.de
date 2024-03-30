import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import UnoCSS from 'unocss/vite'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
	plugins: [
		UnoCSS({
			transformers: [
				transformerDirectives(),
			],
		}),
		sveltekit()
	]
});
