import { defineConfig } from 'astro/config';
export default defineConfig({output:'static',server:{host:'0.0.0.0'},vite:{server:{allowedHosts:['terminal.local']}},site:process.env.SITE_URL || undefined,base:process.env.BASE_PATH || '/',trailingSlash:'always'});
