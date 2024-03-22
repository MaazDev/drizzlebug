import { defineConfig } from 'drizzle-kit'
export default defineConfig({
	schema: './schema.ts',
	out: './drizzle',
	driver: 'pg',
	dbCredentials: {
		connectionString:
			'postgresql://API_KEY@eu-west-1.sql.xata.sh/storlyine:main?sslmode=require'
	},
	verbose: true
})
