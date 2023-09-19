import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import svelte from '@astrojs/svelte';
const DEV_PORT = 8080;

// https://astro.build/config
export default defineConfig({
	site: `http://localhost:${DEV_PORT}`,
	base: undefined,
	// output: 'hybrid',
	server: {
		port: DEV_PORT,
	},
	integrations: [sitemap(), tailwind(), svelte()],
});
