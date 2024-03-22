import { defineConfig } from 'drizzle-kit'
export default defineConfig({
	schema: './schema.ts',
	out: './drizzle',
	driver: 'pg',
	dbCredentials: {
		connectionString:
			'postgresql://i1j5o2:xau_cyQOjCnBYdgvl9on4PemJeTAV6u1j1Hz3@eu-west-1.sql.xata.sh/storlyine:main?sslmode=require'
	},
	verbose: true
})
