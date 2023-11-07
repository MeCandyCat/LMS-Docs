import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
    site: 'https://mecandycat.github.io',
    base: '/LMS-Docs',
    integrations: [
        starlight({
            title: "LMS Docs",
            description: "The wiki page of the LMS Discord Bot",
            favicon: "./src/assets/logo.png",
            logo: {
                replacesTitle: true,
                src: "./src/assets/logo.png",
            },
            social: {
                discord: "https://discord.gg/FMxa75JcB2",
            },
            customCss: [
                './src/styles/theme.css',
                './src/styles/custom.css',
				'@fontsource/montserrat/600.css'
            ]
        }),
    ],
});
