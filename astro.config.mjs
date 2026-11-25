import { defineConfig } from 'astro/config';

const productionDomain = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export default defineConfig({
  output: 'static',
  site: productionDomain ? `https://${productionDomain}` : undefined,
});
