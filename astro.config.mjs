import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

const DEV_PORT = 8080;

// https://astro.build/config
export default defineConfig({
	site: `http://localhost:${DEV_PORT}`,
	base: undefined,
	output: 'server',
	server: {
		port: DEV_PORT,
	},
	integrations: [sitemap(), tailwind()],
});
