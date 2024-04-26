import adapter from '@sveltejs/adapter-auto';

const config = {
	kit: {
		adapter: adapter(),

		env: {
			dir: './'
		},

		alias: {
			$db: './src/lib/server/db',
			$components: './src/lib/components',
		}
	}
}

export default config;
